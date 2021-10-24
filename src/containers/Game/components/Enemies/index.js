import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { EnemyStyled, enemyImg } from './styled';

import { addScore } from '../../../../store/actions/score';
import { defeatEnemy } from '../../../../store/actions/enemy';
import { handleLife } from '../../../../store/actions/life';
import { gameOver } from '../../../../store/actions/game';

const Enemy = (props) => {

  const { enemyType, enemyId, defeatEnemy, addScore, handleLife, storeCharacter, storeLife, storeGame, gameOver } = props;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const widthEnemyPx = viewportHeight * (0.15);
  
  const [left, setLeft] = useState(viewportWidth);
  const [lostLife, setLostLife] = useState(false);
  
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
  
  const minEnemyAttackPx = (viewportHeight * 0.03);
  const maxEnemyAttackPx = (viewportHeight * 0.05);
  const charPosition = storeCharacter.position;
  const lifes = storeLife.life
  useEffect(() => {
    if ((left >= minEnemyAttackPx) && (left <= maxEnemyAttackPx) && (charPosition <= 22)) {
      if (!lostLife) {
        if (lifes > 0){
          handleLife(-1);
          setLostLife(true);
        } else {
          gameOver();
        }
      }
    }
  },[charPosition, handleLife, left, lifes, minEnemyAttackPx, maxEnemyAttackPx, lostLife, gameOver])
  
  console.log (storeGame.game)

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