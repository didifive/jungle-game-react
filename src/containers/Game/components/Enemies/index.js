import { useEffect, useState, useMemo } from 'react';
import { connect } from 'react-redux';

import { EnemyStyled, enemyImg } from './styled';

import { addScore } from '../../../../store/actions/score';
import { defeatEnemy } from '../../../../store/actions/enemy';
import { handleLife } from '../../../../store/actions/life';
import { gameOver } from '../../../../store/actions/game';

import gameOverSound from '../../../../assets/sound/384903__muzotv__robotic-voice-now-you-are-dead-hd.mp3'

const audioGameOver = new Audio(gameOverSound);

const Enemy = (props) => {

  const { enemyType, enemyId, defeatEnemy, addScore, handleLife, storeCharacter, storeLife, storeGame, gameOver } = props;

  const enemyImage = useMemo(() => enemyImg(enemyType), [enemyType]);

  const gameState = useMemo(() => storeGame.game, [storeGame.game]);

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const widthEnemyPx = useMemo(() => (viewportHeight * (0.15)), [viewportHeight]);
  
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
  
  const minEnemyAttackPx = useMemo(() => (viewportHeight * 0.02), [viewportHeight]);
  const maxEnemyAttackPx = useMemo(() => (viewportHeight * 0.04), [viewportHeight]);
  const charPosition = useMemo(() => storeCharacter.position, [storeCharacter.position]);
  const lifes = useMemo(() => storeLife.life, [storeLife.life]);
  useEffect(() => {
    if (gameState === 'start') {
      if ((left >= minEnemyAttackPx) && (left <= maxEnemyAttackPx) && (charPosition <= 22)) {
        if (!lostLife) {
          if (lifes > 0){
            handleLife(-1);
            setLostLife(true);
          } else {
            audioGameOver.play();
            gameOver();
          }
        }
      }
    }
  },[charPosition, gameOver, gameState, handleLife, left, lifes, lostLife, maxEnemyAttackPx, minEnemyAttackPx])
  
  return (
    <EnemyStyled
      image= {enemyImage}
      left= {`${left}px`}
      zIndex= "1"
    />
  )
};

const mapStateToProps = (state) => ({
  storeCharacter: state.characterReducer,
  storeLife: state.lifeReducer,
  storeGame: state.gameReducer
});

export default connect(
  mapStateToProps,
  { addScore, defeatEnemy, handleLife, gameOver }
  )(Enemy);