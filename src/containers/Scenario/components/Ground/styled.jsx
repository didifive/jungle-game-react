import styled from "styled-components";

export const GroundImage = styled.div.attrs(props => ({
  style: {
    animationPlayState: props.$animate || 'running',
    WebkitAnimationPlayState: props.$animate || 'running',
    backgroundImage: `url('${props.$image}')`,
    zIndex: props.$zIndex || '0'
  }
}))`
  @keyframes slideright {
    from {
        background-position: 100000px;
    }
    to {
        background-position: 0px;
    }
  }
  animation: slideright ${props => props.$speed || '600'}s linear;
  -webkit-animation: slideright ${props => props.$speed || '600'}s linear;

  position: absolute;
  bottom: 0;
  left: 0;
  background-repeat: repeat-x;
  width: 100%;
  height: 8vh;
  background-size: auto 100%;
`;