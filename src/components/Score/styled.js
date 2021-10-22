import styled from "styled-components"; 

export const ScoreStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 13vh;
  left: 3vw;
  width: 94vw;
  height: 7vh;
  z-index: 0;
  
  h2 {
    border: 0px;
    color: #e0f3eb;
    font-size: 4em;
    font-family: 'Luckiest Guy', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 0px;
    padding: 0px;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #1B3835;
  }

  @media screen and (max-width:418px){
    h2 {
      font-size: 1.5em;
    }
  }
  
  @media screen and (max-width:767.98px){
    h2 {
      font-size: 1.8em;
    }
  }
  
  @media screen and (max-width:1199px){
    h2 {
      font-size: 2.8em;
    }
  }
`;