import characterIdle from "../../assets/img/character/idle.gif"
import characterJump from "../../assets/img/character/jump.png"
import characterLanding from "../../assets/img/character/landing.png"
import characterRun from "../../assets/img/character/run.gif"
import { CharacterStyled } from "./CharacterStyled";

export const Character = () => {
  return (
    <CharacterStyled 
      image={characterRun}
      widthChar= "10vh"
      heightChar= "15vh"
      zIndex= "1"
      bottomPosition = "7vh"
    />
  )
}