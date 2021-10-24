import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { EnemyStyled, enemyImg } from './styled';

import { addScore } from '../../store/actions/score';
import { defeatEnemy } from '../../store/actions/enemy';
import { handleLife } from '../../store/actions/life';
import { gameOver } from '../../store/actions/game';

const Enemy = (props) => {

  const { enemyType, enemyId, defeatEnemy, addScore, handleLife, storeCharacter, storeLife, storeGame } = props;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const widthEnemyPx = viewportHeight * (0.15);
  
  const [left, setLeft] = useState(viewportWidth);
  const [perdeuVida, setPerdeuVida] = useState(false);
  
  const enemyImage = enemyImg(enemyType);

  useEffect(() => {
    if (left >= ( widthEnemyPx * -1)) {
      const leftTimer = setInterval(() => {
        setLeft(left - 10);
      }, 20);
      return () => clearInterval(leftTimer);
    } else {
      defeatEnemy(enemyId);
      addScore(5);
    }
  },[addScore,defeatEnemy,enemyId,left,widthEnemyPx])
  
  useEffect(() => {
    const minEnemyAttackPx = (viewportHeight * 0.03);
    const maxEnemyAttackPx = (viewportHeight * 0.07);
    const charPosition = storeCharacter.position;
    if ((left >= minEnemyAttackPx) && (left <= maxEnemyAttackPx) && (charPosition <= 22)) {
      if (!perdeuVida) {
        if (storeLife.life > 0){
          handleLife(-1);
          setPerdeuVida(true);
        } else {
          gameOver();
        }
      }
    }
  },[handleLife, left, perdeuVida, storeCharacter.position, storeLife.life, viewportHeight])
  
  console.log (storeGame.game)

  return (
    <EnemyStyled
        zIndex= "1"
        left= {`${left}px`}
        image= {enemyImage}
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