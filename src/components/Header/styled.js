import styled from "styled-components"; 

export const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 3vh;
  left: 3vw;
  width: 94vw;
  height: 8vh;
  z-index: 0;
  
  h1 {
    margin: 0px;
    padding: 0px;
    color: #e0f3eb;
    border: 0px;
    font-size: 5em;
    font-family: 'Luckiest Guy', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #1B3835;
    margin-right: 30px;
  }

  nav span {
    color: #e0f3eb;
    margin-right: 10px;
    font-size: 3em;

    &:hover {
      cursor: pointer;
      color: #7ccfaf;
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
      font-size: 1.8em;
      margin-right: 12px;
    }

    nav span {
      font-size: 1.2em;
      margin-right: 8px;
    }
  }
`;