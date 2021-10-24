import styled from "styled-components"; 

import errorPng from "../../assets/img/error.png";
import characterIdle from "../../assets/img/character/idle.gif";
import characterJump from "../../assets/img/character/jump.png";
import characterLanding from "../../assets/img/character/landing.png";
import characterRun from "../../assets/img/character/run.gif";

export const characterImg = (characterState) => {
  switch(characterState) {
  case 'idle':
    return(characterIdle)
  case 'run':
    return(characterRun)
  case 'jump':
    return(characterJump)
  case 'landing':
    return(characterLanding)
  default:
    return(characterIdle)
  }
}

export const CharacterStyled = styled.div.attrs(props => ({
  position: props.position || '30',
  image: props.image || {errorPng},
  widthChar: props.widthChar || '20',
  heightChar: props.heightChar || '40',
  zIndex: props.zIndex || '0',
  measureUnity: props.measureUnity || 'px'

}))`
  position: absolute;
  bottom: ${props => props.position}${props => props.measureUnity};
  left: 3vh;
  background-image: url('${props => props.image}');
  background-size: auto 100%;
  background-repeat: no-repeat;
  width: ${props => props.widthChar}${props => props.measureUnity};
  height: ${props => props.heightChar}${props => props.measureUnity};
  z-index: ${props => props.zIndex};
`;