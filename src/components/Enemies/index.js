import { useEffect, useState } from 'react'
import goblin from "../../assets/img/enemies/goblin.gif";
import { EnemyStyled } from "./styled";

export const Enemy = (props) => {

  const { enemyId, score } = props;

  const viewportwidth = window.innerWidth;
  const widthEnemyPx = ((viewportwidth*(-16))/100);

  const listEnemy = [
    {
      name: 'Goblin',
      image: `${goblin}`,
    },
  ];

  const [left, setLeft] = useState(viewportwidth);

  useEffect(() => {
    if (left >= widthEnemyPx) {
      const leftTimer = setInterval(() => {
        setLeft(left - ( 20 * ( 1 + ( score / 1000 ) ) ) );
      }, 20);
  
      return () => clearInterval(leftTimer);
    }
  },[left, widthEnemyPx, score])
  
  const renderEnemy = () => {
    return (
      <EnemyStyled
        key= {`${listEnemy[0].name}-${enemyId}`}
        zIndex= "1"
        left= {`${left}px`}
        image= {listEnemy[0].image}
      />
    )
  };

  return (
    <>
      {renderEnemy()}
    </>
  )
};