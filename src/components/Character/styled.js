import styled from "styled-components"; 
import errorPng from "../../assets/img/error.png";

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
  left: 3vw;
  background-image: url('${props => props.image}');
  background-size: auto 100%;
  background-repeat: no-repeat;
  width: ${props => props.widthChar}${props => props.measureUnity};
  height: ${props => props.heightChar}${props => props.measureUnity};
  z-index: ${props => props.zIndex};
`;