import { useEffect, useState, memo } from 'react'
import goblin from "../../assets/img/enemies/goblin.gif";
import { EnemyStyled } from "./styled";

const Enemy = (props) => {

  const { enemyType } = props;

  //PEGAR IMAGEM DO INIMIGO PARA MONTAR A IMAGEM CONFORME O TIPO PASSADO EM "enemyType"
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

export default memo(Enemy);