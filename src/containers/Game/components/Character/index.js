import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { CharacterStyled, characterImg } from './styled';

import characterJumpSound from '../../../../assets/sound/456373__felixyadomi__hop9.mp3';

import { charPosition, charReset } from '../../../../store/actions/character';

const audioCharacterJump = new Audio(characterJumpSound);

const Character = (props) => {

  const { charPosition, charReset } = props;
  const { characterCurrentPosition, gameState, soundEffects } = props;
  
  const [isJumping, setIsJumping] = useState(false);
  const [isLanding, setIsLanding] = useState(false);
  const [characterEvent, setCharacterEvent] = useState('run');
  
  useEffect(() => {
    if (gameState === 'start') {
      const handleKeyUpAndTouch = (e) => {
        if (e.keyCode === 32 || e.type === 'touchend' ) {
          if (!isJumping && !isLanding) {
            setIsJumping(true);
          }
        } 
      }
      
      const jumpInterval = setInterval(() => {
        if (isJumping && !isLanding) {
          setCharacterEvent('jump');
          charPosition(1);
          if (soundEffects && characterCurrentPosition === 8) {
            audioCharacterJump.play();
          }
          if (characterCurrentPosition >= 42) {
            setIsJumping(false);
            setIsLanding(true);
          }
        } else if (!isJumping && isLanding) {
          setCharacterEvent('landing');
          charPosition(-1);
          if (characterCurrentPosition <= 8) {
            setIsLanding(false);
          }
        } else {
          setCharacterEvent('run');
        }
      }, 10);

      window.document.addEventListener('keyup', handleKeyUpAndTouch);
      window.document.addEventListener('touchend', handleKeyUpAndTouch);
      return () => {
        window.document.removeEventListener('keyup', handleKeyUpAndTouch);
        window.document.removeEventListener('touchend', handleKeyUpAndTouch);
        clearInterval(jumpInterval);
      }
    } else {
      setIsJumping(false);
      setIsLanding(false);
      charReset();
    }
  },[characterCurrentPosition, charPosition, charReset, gameState, isJumping, isLanding, soundEffects]);

  const renderCharacter = () => {
    return (
      <>
        <CharacterStyled 
          heightChar= "15vh"
          image={(gameState === 'start') ? characterImg(characterEvent) : characterImg('idle')}
          position= {`${characterCurrentPosition}vh`}
          widthChar= "10vh"
          zIndex= "2"
        />
      </>
    )
  };

  return (
    <>
      {renderCharacter()}
    </>
  )
};

export default connect(
  null,
  { charPosition, charReset }
)(Character);