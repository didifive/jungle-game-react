import styled from "styled-components"; 

export const ControlsStyled = styled.div`
  align-items: center;
  background-color: #1B3835aa;
  top: 22vh;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0px auto;
  max-width: 650px;
  min-width: 410px;
  padding: 5px;
  position: absolute;
  transform: scale(1);
  z-index: 2;
  
  p {
    color: #efefef;
    font-size: 1em;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 0 8px;
    text-align: center;
  }

  @media screen and (max-width:1199px){
    transform: scale(.8);
  }

  @media screen and (max-width:767.98px){
    transform: scale(.75);
  }

  @media screen and (max-width:418px){
    transform: scale(.70);
  }

  @media screen and (max-width:360px){
    transform: scale(.60);
  }
`;