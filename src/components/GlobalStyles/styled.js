import { createGlobalStyle } from 'styled-components';
import bgImg from '../../assets/img/background/bg.png';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #cccccc;
    background: url(${bgImg}) center repeat;  
    color: #333333;
    padding: 0;
    margin: 0;
    font-family: 'Luckiest Guy', cursive;
  }
`;