import { Background } from "../BackgroundParalax";
import { Ground } from "../Ground";
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