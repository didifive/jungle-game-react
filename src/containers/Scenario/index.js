import { ScenarioStyled } from "./styled";

import Background from "./components/BackgroundParalax";
import Ground from "./components/Ground";

const Scenario = (props) => {

  const { gameState } = props;
  
  return (
    <ScenarioStyled>
      <Background
        gameState = {gameState}
      />
      <Ground 
        gameState = {gameState}
      />
    </ScenarioStyled>
  )
};

export default Scenario;