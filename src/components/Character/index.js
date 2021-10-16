import characterIdle from "../../assets/img/character/idle.gif";
import characterJump from "../../assets/img/character/jump.png";
import characterLanding from "../../assets/img/character/landing.png";
import characterRun from "../../assets/img/character/run.gif";
import { CharacterStyled } from "./styled";

export const Character = () => {
  const listCharacter = [
    {
      status: 'idle',
      position: 7,
      image: `${characterIdle}`,
      widthChar: 10,
      heightChar: 15,
    },
    {
      status: 'run',
      position: 7,
      image: `${characterRun}`,
      widthChar: 10,
      heightChar: 15,
    },
    {
      status: 'jump',
      position: 7,
      image: `${characterJump}`,
      widthChar: 10,
      heightChar: 15,
    },
    {
      status: 'landing',
      position: 7,
      image: `${characterLanding}`,
      widthChar: 10,
      heightChar: 15,
    }
  ];
  
  const renderCharacter = () => {
    const characterEvent = 'run';
    const characterStatus = listCharacter.filter(char => char.status === characterEvent)
    return (
      <CharacterStyled 
        position = {characterStatus[0].position}
        image={characterStatus[0].image}
        widthChar= {characterStatus[0].widthChar}
        heightChar= {characterStatus[0].heightChar}
        zIndex= "1"
        measureUnity="vh"
      />
    )
  };

  return (
    <>
      {renderCharacter()}
    </>
  )
};