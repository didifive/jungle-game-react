import styled from "styled-components"; 

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 3vw;
  top: 3vh;
  height: 8vh;
  width: 94vw;
  z-index: 0;
  
  h1 {
    border: 0px;
    color: #e0f3eb;
    font-size: 5em;
    font-family: 'Luckiest Guy', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 0px;
    margin-right: 30px;
    padding: 0px;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #1B3835;
    
  }

  nav span {
    color: #e0f3eb;
    font-size: 3em;
    margin-right: 10px;
    
    &:hover {
      color: #7ccfaf;
      cursor: pointer;
    }
  }
 
  @media screen and (max-width:1199px){
    h1 {
      font-size: 3em;
      margin-right: 25px;
    }

    nav span {
      font-size: 1.8em;
      margin-right: 8px;
    }
  }

  @media screen and (max-width:767.98px){
    h1 {
      font-size: 2.5em;
      margin-right: 20px;
    }

    nav span {
      font-size: 1.6em;
    }
  }

  @media screen and (max-width:418px){
    h1 {
      font-size: 2em;
      margin-right: 12px;
    }

    nav span {
      font-size: 1.4em;
      margin-right: 8px;
    }
  }

  @media screen and (max-width:360px){
    h1 {
      font-size: 1.5em;
      margin-right: 12px;
    }

    nav span {
      font-size: 1.2em;
      margin-right: 8px;
    }
  }
`;