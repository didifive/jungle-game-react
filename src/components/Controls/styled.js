import styled from "styled-components"; 

export const ControlsStyled = styled.div`
  align-items: center;
  background-color: #1B3835aa;
  top: 22vh;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  left: 3vw;
  padding: 5px;
  position: absolute;
  transform: scale(1);
  max-width: 500px;
  width: 94vw;
  z-index: 2;
  
  p {
    align-items: center;
    color: #efefef;
    font-size: 1em;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  img {
    margin: 0 5px;
  }

  @media screen and (max-width:1199px){
    transform: scale(.8);
  }

  @media screen and (max-width:767.98px){
    transform: scale(.75);
  }

  @media screen and (max-width:418px){
    transform: scale(.72);
  }

  @media screen and (max-width:360px){
    transform: scale(.68);
  }
`;