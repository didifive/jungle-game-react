import styled from "styled-components"; 

import errorPng from "../../../../assets/img/error.png";

export const GroundImage = styled.div.attrs(props => ({
  image: props.image || {errorPng},
  speed: props.speed || '600',
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
  width: 100%;
  height: 8vh;
  background-size: auto 100%;
  z-index: ${props => props.zIndex};

  .animate {
    animation: slideright ${props => props.speed}s infinite linear;
    -webkit-animation: slideright ${props => props.speed}s infinite linear;
  }
`;