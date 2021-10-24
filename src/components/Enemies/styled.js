import styled from "styled-components"; 

import errorPng from "../../assets/img/error.png";
import goblin from '../../assets/img/enemies/goblin.gif';

export const enemyImg = (enemyType) => {
  switch(enemyType) {
  case 0:
    return(goblin)
  default:
    return(goblin)
  }
}

export const EnemyStyled = styled.div.attrs(props => ({
  image: props.image || {errorPng},
  zIndex: props.zIndex || '0',
  left: props.left || '100vw'
}))`
  position: absolute;
  background-image: url('${props => props.image}');
  background-size: auto 100%;
  background-repeat: no-repeat;
  bottom: 7vh;
  left: ${props => props.left};
  width: 15vh;
  height: 15vh;
  z-index: ${props => props.zIndex};
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;