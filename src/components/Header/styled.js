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
    border: 0px;
    font-size: 8vh;
    font-family: 'Luckiest Guy', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #1B3835;
  }
`;