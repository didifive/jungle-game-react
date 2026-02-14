import styled from "styled-components"; 

import errorPng from "../../../../assets/img/error.png";
import goblin from '../../../../assets/img/enemies/goblin.gif';
import mushroom from '../../../../assets/img/enemies/mushroom.gif';
import skeleton from '../../../../assets/img/enemies/skeleton.gif'

export const enemyImg = (enemyType) => {
  switch(enemyType) {
  case 0:
    return(goblin)
  case 1:
    return(mushroom)
  case 2:
    return(skeleton)
  default:
    return(goblin)
  }
}

export const EnemyStyled = styled.div.attrs(props => ({
  style: {
    backgroundImage: `url(${props.$image})`,
    left: props.$left || '100px',
    zIndex: props.$zIndex || 0
  }
}))`
  position: absolute;
  background-size: auto 100%;
  background-repeat: no-repeat;
  bottom: 7vh;
  width: 15vh;
  height: 15vh;
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;