import styled from "styled-components"; 

export const ModalStyled = styled.div`
  div {
    background-color: #1B3835;
    border-radius: 2em;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    height: 90vh;
    left: 15vw;
    overflow: hidden;
    padding: 3em;
    position: fixed;
    top: 10vh;
    width: 70vw;
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
    text-align: justify;
  }
  
  div p {
    color: #efefef;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 1em;
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
}`;