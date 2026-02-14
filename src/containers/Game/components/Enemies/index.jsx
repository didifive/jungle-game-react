import { useEffect, useState, useMemo, useRef } from 'react';
import { connect } from 'react-redux';

import { EnemyStyled, enemyImg, getColorFilter } from './styled';

import { addScore } from '../../../../store/actions/score';
import { defeatEnemy } from '../../../../store/actions/enemy';
import { handleLife } from '../../../../store/actions/life';
import { gameOver } from '../../../../store/actions/game';

import gameOverSound from '../../../../assets/sound/384903__muzotv__robotic-voice-now-you-are-dead-hd.mp3'
import hitDamageSound from '../../../../assets/sound/437651__dersuperanton__damage-hit-voice-vocal.mp3'

// Criar instâncias de áudio globais (fora do componente)
const audioGameOver = new Audio(gameOverSound);
const audioHitDamage = new Audio(hitDamageSound);

const Enemy = (props) => {

  const { addScore, defeatEnemy, gameOver, handleLife } = props;
  const { characterCurrentPosition, enemyId, enemyType, gameState, life, soundEffects } = props;

  const enemyImage = useMemo(() => enemyImg(enemyType), [enemyType]);
  const colorFilter = useMemo(() => getColorFilter(), [enemyId]); // Cor única por inimigo

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  
  // Dimensões do inimigo
  const widthEnemyPx = useMemo(() => (viewportHeight * (0.15)), [viewportHeight]);
  
  // Área de colisão ajustada (mais precisa que antes)
  // Considerando o personagem tem ~10vh de largura em left: 3vh
  const minEnemyAttackPx = useMemo(() => (viewportHeight * 0.008), [viewportHeight]); // Reduzido
  const maxEnemyAttackPx = useMemo(() => (viewportHeight * 0.035), [viewportHeight]); // Ajustado
  
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
            if (soundEffects) {
              audioHitDamage.pause();
              audioHitDamage.currentTime = 0;
              audioHitDamage.play().catch(() => {});
            }
            setLostLife(true);
          } else if (life === 0) {
            // Garante que gameOver seja chamado quando vida chegar a 0
            gameOver();
            if (soundEffects) {
              setTimeout(() => {
                audioGameOver.pause();
                audioGameOver.currentTime = 0;
                audioGameOver.play().catch(() => {});
              }, 400);
            }
            setLostLife(true);
          }
        }
      }
    }
  },[characterCurrentPosition, gameOver, gameState, handleLife, left, life, lostLife, minEnemyAttackPx, maxEnemyAttackPx, soundEffects])
  
  return (
    <EnemyStyled
      $image={enemyImage}
      $left={`${left}px`}
      $zIndex="1"
      $colorFilter={colorFilter}
    />
  )
};

export default connect(
  null,
  { addScore, defeatEnemy, handleLife, gameOver }
)(Enemy);
