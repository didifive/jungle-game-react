import { createGlobalStyle } from 'styled-components';
import bgImg from '../../assets/img/background/bg.png';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #eeeeee;
    background: url(${bgImg}) center repeat;  
    color: #000000;
    display: flex;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 0;
    overflow: hidden;
    padding: 0;
  }
`;