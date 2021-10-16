import { createGlobalStyle } from 'styled-components';
import bgImg from '../../assets/img/background/bg.png';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #eeeeee;
    background: url(${bgImg}) center repeat;  
    color: #000000;
    padding: 0;
    margin: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;