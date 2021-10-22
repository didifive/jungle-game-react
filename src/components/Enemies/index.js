import { useEffect, useState, memo } from 'react'
import { connect } from 'react-redux';

import goblin from '../../assets/img/enemies/goblin.gif';
import { EnemyStyled } from './styled';

import { addScore } from '../../store/actions/score';
import { defeatEnemy } from '../../store/actions/enemy'

const Enemy = (props) => {

  const { enemyType, enemyId, defeatEnemy, addScore } = props;

  const enemyImage = () => {
    switch(enemyType) {
    case 0:
      return(goblin)
    default:
      return(goblin)
    }
  }
  
  const viewportwidth = window.innerWidth;
  const widthEnemyPx = ((viewportwidth*(-16))/100);

  const [left, setLeft] = useState(viewportwidth);

  useEffect(() => {
    if (left >= widthEnemyPx) {
      const leftTimer = setInterval(() => {
        setLeft(left - 10);
      }, 20);
      return () => clearInterval(leftTimer);
    } else {
      defeatEnemy(enemyId);
      addScore(5);
    }
  })
  
  return (
    <EnemyStyled
        zIndex= "1"
        left= {`${left}px`}
        image= {enemyImage}
    />
  )
};

export default memo(
  connect(
    null,
    { addScore, defeatEnemy }
  )(Enemy)
);