import styled from "styled-components"; 

import bgImg from '../../assets/img/background/bg.png';

export const ScenarioStyled = styled.div`
  background: url(${bgImg}) center repeat;  
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -99;
`;