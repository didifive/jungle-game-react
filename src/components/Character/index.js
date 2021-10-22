import { useState, useEffect } from 'react';

import characterIdle from "../../assets/img/character/idle.gif";
import characterJump from "../../assets/img/character/jump.png";
import characterLanding from "../../assets/img/character/landing.png";
import characterRun from "../../assets/img/character/run.gif";

import { CharacterStyled } from "./styled";

const Character = () => {
  
  const [isJumping, setIsJumping] = useState(false);
  const [isLanding, setIsLanding] = useState(false);
  const [position, setPosition] = useState(7);
  const [characterEvent, setCharacterEvent] = useState('run');
  
  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.keyCode === 32) {
        if (!isJumping && !isLanding) {
          setIsJumping(true);
        }
      } 
    }
    window.document.addEventListener('keyup', handleKeyUp);
    return () => {
      window.document.removeEventListener('keyup', handleKeyUp);
    }
  });

  useEffect(() => {
    const jumpInterval = setInterval(() => {
      if (isJumping && !isLanding) {
        setCharacterEvent('jump');
        setPosition(position + 1);
        if (position >= 42) {
          setIsJumping(false);
          setIsLanding(true);
        }
      } else if (!isJumping && isLanding) {
        setCharacterEvent('landing');
        setPosition(position - 1);
        if (position <= 8) {
          setIsLanding(false);
        }
      } else {
        setCharacterEvent('run');
      }
    }, 10);
    return () => clearInterval(jumpInterval);
  });

  const listCharacter = [
    {
      status: 'idle',
      image: `${characterIdle}`,
    },
    {
      status: 'run',
      image: `${characterRun}`,
    },
    {
      status: 'jump',
      image: `${characterJump}`,
    },
    {
      status: 'landing',
      image: `${characterLanding}`,
    }
  ];
  
  const renderCharacter = () => {
    const characterStatus = listCharacter.filter(char => char.status === characterEvent)
    return (
      <CharacterStyled 
        position= {position}
        image={characterStatus[0].image}
        widthChar= "10"
        heightChar= "15"
        zIndex= "2"
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

export default Character;