import goblin from "../../assets/img/enemies/goblin.gif";
import { ReactDOM } from "react";
import { EnemyStyled } from "./styled";

export const Enemy = () => {
  const listEnemies = [
    {
      name: 'Goblin',
      image: `${goblin}`,
    },
  ];
  
  const renderEnemy = () => {
    return (
      <EnemyStyled 
        key= {listEnemies[0].name}
        left= "90"
        image= {listEnemies[0].image}
        zIndex= "1"
      >
      </EnemyStyled>
    )
  };

  return (
    <>
      {renderEnemy()}
    </>
  )
};