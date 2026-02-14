import styled from "styled-components"; 

import errorPng from "../../../../assets/img/error.png";
import characterIdle from "../../../../assets/img/character/idle.gif";
import characterJump from "../../../../assets/img/character/jump.png";
import characterLanding from "../../../../assets/img/character/landing.png";
import characterRun from "../../../../assets/img/character/run.gif";

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

export const CharacterStyled = styled.div.attrs(
  ({ heightChar, image, position, widthChar, zIndex }) => ({
    style: {
      backgroundImage: `url(${image})` || errorPng,
      bottom: position || '100px',
      height: heightChar || '40px',
      width: widthChar || '20px',

    }
  })
)`
  position: absolute;
  left: 3vh;
  background-size: auto 100%;
  background-repeat: no-repeat;
`;