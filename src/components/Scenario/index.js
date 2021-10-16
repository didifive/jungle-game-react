import { Background } from "../BackgroundParalax";
import { Ground } from "../Ground";
import { ScenarioStyled } from "./styled";


export const Scenario = () => {
  return (
    <ScenarioStyled>
      <Background />
      <Ground />
    </ScenarioStyled>
  )
};