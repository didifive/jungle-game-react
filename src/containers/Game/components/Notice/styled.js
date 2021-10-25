import styled from "styled-components"; 

export const NoticeStyled = styled.div`
  align-items: center;
  top: 22vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0px;
  position: absolute;
  transform: scale(1);
  width: 100vw;
  z-index: 2;
  
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #1B3835aa;
    border-radius: 10px;
    justify-content: center;
    max-width: 650px;
    min-width: 410px;
    padding: 5px;
  }

  div span {
    color: #efefef;
    font-size: 1em;
    text-align: center;
  }

  div p {
    color: #efefef;
    font-size: 1em;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
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