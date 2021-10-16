import characterIdle from "../../assets/img/character/idle.gif";
import characterJump from "../../assets/img/character/jump.png";
import characterLanding from "../../assets/img/character/landing.png";
import characterRun from "../../assets/img/character/run.gif";
import { CharacterStyled } from "./styled";

export const Character = () => {
  return (
    <CharacterStyled 
      position = "7"
      image={characterRun}
      widthChar= "10"
      heightChar= "15"
      zIndex= "1"
      measureUnity="vh"
    />
  )
};