import styled from "styled-components"; 
import errorPng from "../../assets/img/error.png";

export const CharacterStyled = styled.div.attrs(props => ({
  image: props.image || {errorPng},
  widthChar: props.widthChar || '20px',
  heightChar: props.heightChar || '40px',
  zIndex: props.zIndex || '0',
  bottomPosition: props.bottomPosition || '30px'
}))`
  position: absolute;
  bottom: ${props => props.bottomPosition};
  left: 3vw;
  background-image: url('${props => props.image}');
  background-size: auto 100%;
  background-repeat: no-repeat;
  width: ${props => props.widthChar};
  height: ${props => props.heightChar};
  z-index: ${props => props.zIndex};
`;