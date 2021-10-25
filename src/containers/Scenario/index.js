import { ScenarioStyled } from "./styled";

import Background from "./components/BackgroundParalax";
import Ground from "./components/Ground";

const Scenario = () => {
  return (
    <ScenarioStyled>
      <Background />
      <Ground />
    </ScenarioStyled>
  )
};

export default Scenario;