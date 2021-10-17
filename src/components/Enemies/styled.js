import styled from "styled-components"; 
import errorPng from "../../assets/img/error.png";

export const EnemyStyled = styled.div.attrs(props => ({
  left: props.left || '500',
  image: props.image || {errorPng},
  zIndex: props.zIndex || '0',
  measureUnity: props.measureUnity || 'px'

}))`
  position: absolute;
  background-image: url('${props => props.image}');
  background-size: auto 100%;
  background-repeat: no-repeat;
  bottom: 7vh;
  left: ${props => props.left}vw;
  width: 15vh;
  height: 15vh;
  z-index: ${props => props.zIndex};
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;