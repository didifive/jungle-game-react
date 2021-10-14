import styled from "styled-components"; 
import errorPng from "../../assets/img/error.png";

export const BackgroundParalax = styled.div.attrs(props => ({
  image: props.image || {errorPng},
  speed: props.speed || '1500s',
  zIndex: props.zIndex || '0'
}))`
  @keyframes slideright {
    from {
        background-position: 100000px;
    }
    to {
        background-position: 0px;
    }
  }
  position: absolute;
  bottom: 0;
  left: 0;
  background-image: url('${props => props.image}');
  background-repeat: repeat-x;
  animation: slideright ${props => props.speed} infinite linear;
  -webkit-animation: slideright ${props => props.speed} infinite linear;
  width: 80vw;
  height: 50vh;
  background-size: auto 100%;
  -webkit-background-size: auto 100%;
  z-index: ${props => props.zIndex};
`;