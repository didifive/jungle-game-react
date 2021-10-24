import styled from "styled-components"; 

export const HudStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
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

  h3 {
    border: 0px;
    color: #e0f3eb;
    font-size: 3em;
    font-family: 'Luckiest Guy', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 0px;
    margin-right: 50px;
    padding: 0px;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: #1B3835;
  }

  img {
    margin-right: 10px;
    min-height: 60px;
    min-witdh: 40px;
  }
  
  @media screen and (max-width:1199px){
    h2 {
      font-size: 2.8em;
    }

    h3 {
      font-size: 2.1em;
      margin-right: 40px;
    }

    img {
      min-height: 45px;
      min-witdh: 30px;
      margin-right: 5px;
    }
  }

  @media screen and (max-width:767.98px){
    h2 {
      font-size: 2.2em;
    }

    h3 {
      font-size: 1.6em;
      margin-right: 25px;
    }

    img {
      min-height: 37px;
      min-witdh: 25px;
      margin-right: 5px;
    }
  }

  @media screen and (max-width:418px){
    h2 {
      font-size: 1.6em;
    }

    h3 {
      font-size: 1.2em;
      margin-right: 10px;
    }

    img {
      min-height: 30px;
      min-witdh: 20px;
      margin-right: 5px;
    }
  }
`;