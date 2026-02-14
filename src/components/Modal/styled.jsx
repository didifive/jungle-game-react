import styled from "styled-components"; 

export const ModalStyled = styled.div`
  div {
    background-color: #1B3835;
    border-radius: 2em;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    height: calc(100vh - 10vh - 3em);
    left: 8vw;
    overflow: hidden;
    padding: 3em;
    position: fixed;
    top: 10vh;
    width: calc(100vw - 16vw - 6em);
    z-index: 10001;
  }

  div a {
    color: #cdcdcd;
    text-decoration: none;

    &:hover {
      color: #7ccfaf;
    }
  }
  
  div h3 {
    color: #efefef;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 2em;
    font-weight: bold;
    margin: 0;
    margin-bottom: 0.75em;
    text-align: left;
  }
  
  div p {
    color: #efefef;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 1em;
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    text-align: justify;
  }

  .background {
    background-color: #1B3835aa;
    display: block;
    filter: blur(5px);
    -webkit-filter: blur(5px); 
    height: 100vh;
    left: 0;
    top: 0;
    width: 100vw;
    z-index: 10000;
  }

  .gameload {
    background-color: #efefef;
    border-radius: 5px;
    color: #1B3835;
    cursor: pointer;
    font-size: 1.2em;
    font-weight: bold;
    padding: 5px;
    text-align: center;

    &:hover {
      background-color: #7ccfaf;
    }
  }

  .highResolution {
    display: block;
    text-align: left;
  }

  @media screen and (max-width:1199px){
    div {
      height: calc(100vh - 5vh - 2em);
      left: 5vw;
      padding: 2em;
      top: 5vh;
      width: calc(100vw - 10vw - 4em);
    }
    
    div h3 {
      font-size: 1.5em;
      margin-bottom: 0.8em;
    }

    div p {
      font-size: 0.8em;
      margin-bottom: 0.5em;
    }

    .gameload {
      font-size: 1em;
    }

    .highResolution {
      font-size: 0.8em;
    }
  }

  @media screen and (max-width:767.98px){
    div {
      border-radius: 1.5em;
      height: calc(100vh - 3vh - 1.5em);
      left: 3vw;
      padding: 1.5em;
      top: 3vh;
      width: calc(100vw - 6vw - 3em);
    }
    
    div h3 {
      font-size: 1.5em;
      margin-bottom: 0.4em;
      margin-top: 0.3em;
    }

    div p {
      font-size: 0.7em;
      margin-bottom: 0.3em;
      margin-top: 0.3em;
    }

    .gameload {
      font-size: 0.9em;
    }

    .highResolution {
      display: none;
    }
  }

  @media screen and (max-width:418px){
    div {
      border-radius: 1em;
      height: calc(100vh - 10px - 1.5em);
      left: 10px;
      top: 10px;
      width: calc(100vw - 20px - 3em);
    }

    .gameload {
      font-size: 0.7em;
    }

    .highResolution {
      display: none;
    }
  }
}`;