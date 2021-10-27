import { useEffect, useState, useMemo } from 'react';
import { connect } from 'react-redux';

import { EnemyStyled, enemyImg } from './styled';

import { addScore } from '../../../../store/actions/score';
import { defeatEnemy } from '../../../../store/actions/enemy';
import { handleLife } from '../../../../store/actions/life';
import { gameOver } from '../../../../store/actions/game';

import gameOverSound from '../../../../assets/sound/384903__muzotv__robotic-voice-now-you-are-dead-hd.mp3'
import hitDamageSound from '../../../../assets/sound/437651__dersuperanton__damage-hit-voice-vocal.mp3'

const audioGameOver = new Audio(gameOverSound);
const audioHitDamage = new Audio(hitDamageSound);

const Enemy = (props) => {

  const { addScore, defeatEnemy, gameOver, handleLife } = props;
  const { characterCurrentPosition, enemyId, enemyType, gameState, life, soundEffects } = props;

  const enemyImage = useMemo(() => enemyImg(enemyType), [enemyType]);

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const widthEnemyPx = useMemo(() => (viewportHeight * (0.15)), [viewportHeight]);
  const minEnemyAttackPx = useMemo(() => (viewportHeight * 0.02), [viewportHeight]);
  const maxEnemyAttackPx = useMemo(() => (viewportHeight * 0.04), [viewportHeight]);
  
  const [left, setLeft] = useState(viewportWidth);
  const [lostLife, setLostLife] = useState(false);

  useEffect(() => {
    if (gameState === 'start') {
      if (left >= ( widthEnemyPx * -1)) {
        const leftTimer = setInterval(() => {
          setLeft(left - 10);
        }, 20);
        return () => clearInterval(leftTimer);
      } else {
        defeatEnemy(enemyId);
        addScore(5);
      }
    }
  },[addScore, defeatEnemy, enemyId, gameState, left, widthEnemyPx])
  
  useEffect(() => {
    if (gameState === 'start') {
      if ((left >= minEnemyAttackPx) && (left <= maxEnemyAttackPx) && (characterCurrentPosition <= 22)) {
        if (!lostLife) {
          if (life > 0) {
            handleLife(-1);
            if (soundEffects) {audioHitDamage.play();} 
            setLostLife(true);
          } else {
            if (soundEffects) {audioGameOver.play();}
            gameOver();
          }
        }
      }
    }
  },[characterCurrentPosition, gameOver,gameState, handleLife, left, life, lostLife, minEnemyAttackPx, maxEnemyAttackPx, soundEffects])
  
  return (
    <EnemyStyled
      image= {enemyImage}
      left= {`${left}px`}
      zIndex= "1"
    />
  )
};

export default connect(
  null,
  { addScore, defeatEnemy, handleLife, gameOver }
  )(Enemy);
