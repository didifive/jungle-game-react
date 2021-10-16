import styled from "styled-components"; 

export const HeaderStyled = styled.div`
  display: flex;
  position: absolute;
  top: 3vh;
  left: 3vw;
  background-color: rgba(255,255,255,0);
  width: 94vw;
  height: 8vh;
  z-index: 0;
  color: #C3DED6;

  h1 {
    margin: 0px;
    padding: 0px;
    font-size: 5em;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #1B3835;
  }
`;