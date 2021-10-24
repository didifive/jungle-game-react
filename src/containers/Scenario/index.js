import { Background } from "./components/BackgroundParalax";
import { Ground } from "./components/Ground";
import { ScenarioStyled } from "./styled";


const Scenario = () => {
  return (
    <ScenarioStyled>
      <Background />
      <Ground />
    </ScenarioStyled>
  )
};

export default Scenario;