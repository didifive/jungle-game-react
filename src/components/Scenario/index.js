import { Background } from "../BackgroundParalax";
import { Ground } from "../Ground";
import { Character } from '../Character';
import { ScenarioStyled } from "./styled";


export const Scenario = () => {
  return (
    <ScenarioStyled>
      <Background />
      <Ground />
      <Character />
    </ScenarioStyled>
  )
}