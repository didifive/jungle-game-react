import styled from "styled-components"; 
import errorPng from "../../assets/img/error.png";

export const BackgroundParalax = styled.div.attrs(props => ({
  image: props.image || {errorPng},
  speed: props.speed || '1500',
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
  animation: slideright ${props => props.speed}s infinite linear;
  -webkit-animation: slideright ${props => props.speed}s infinite linear;
  width: 100%;
  height: 100%;
  background-size: auto 100%;
  -webkit-background-size: auto 100%;
  z-index: ${props => props.zIndex};
`;