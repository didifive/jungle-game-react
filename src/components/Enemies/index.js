import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { EnemyStyled, enemyImg } from './styled';

import { addScore } from '../../store/actions/score';
import { defeatEnemy } from '../../store/actions/enemy'

const Enemy = (props) => {

  const { enemyType, enemyId, defeatEnemy, addScore, storeCharacter } = props;

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
  
  const minEnemyAttackPx = (viewportHeight * 0.05);
  const maxEnemyAttackPx = (viewportHeight * 0.10);
  const charPosition = storeCharacter.position;
  if ((left >= minEnemyAttackPx) && (left <= maxEnemyAttackPx) && (charPosition <= 22)) {
    if (!perdeuVida) {
      console.log("Perdeu Vida")
      setPerdeuVida(true);
    }
  }

  return (
    <EnemyStyled
        zIndex= "1"
        left= {`${left}px`}
        image= {enemyImage}
    />
  )
};

const mapStateToProps = (state) => ({
  storeCharacter: state.characterReducer
});

export default connect(
  mapStateToProps,
    { addScore, defeatEnemy }
  )(Enemy);