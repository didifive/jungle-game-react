import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Sound from 'react-sound';

import { CharacterStyled, characterImg } from './styled';

import characterJump from '../../../../assets/sound/456371_felixyadomi_hop4.mp3';

import { charPosition, charReset } from '../../../../store/actions/character';

const Character = (props) => {

  const { storeCharacter, charPosition, charReset, gameState } = props;
  
  const [isJumping, setIsJumping] = useState(false);
  const [isLanding, setIsLanding] = useState(false);
  const [characterEvent, setCharacterEvent] = useState('run');

  const charCurrentPosition = storeCharacter.position;
  
  useEffect(() => {
    if (gameState === 'start') {
      const handleKeyUpAndTouch = (e) => {
        if (e.keyCode === 32 || e.type === 'touchend' ) {
          if (!isJumping && !isLanding) {
            setIsJumping(true);
          }
        } 
      }
      window.document.addEventListener('keyup', handleKeyUpAndTouch);
      window.document.addEventListener('touchend', handleKeyUpAndTouch);
      return () => {
        window.document.removeEventListener('keyup', handleKeyUpAndTouch);
        window.document.removeEventListener('touchend', handleKeyUpAndTouch);
      }
    } 
  },[gameState, isJumping, isLanding]);

  useEffect(() => {
    if (gameState === 'start') {
      const jumpInterval = setInterval(() => {
        if (isJumping && !isLanding) {
          setCharacterEvent('jump');
          charPosition(1);
          if (charCurrentPosition >= 42) {
            setIsJumping(false);
            setIsLanding(true);
          }
        } else if (!isJumping && isLanding) {
          setCharacterEvent('landing');
          charPosition(-1);
          if (charCurrentPosition <= 8) {
            setIsLanding(false);
          }
        } else {
          setCharacterEvent('run');
        }
      }, 10);
      return () => clearInterval(jumpInterval);
    } else {
      setIsJumping(false);
      setIsLanding(false);
      charReset();
    }
  },[charCurrentPosition, charPosition, charReset, gameState, isJumping, isLanding]);

  const soundLoop = false;
  const soundVolume = 100;


  const renderCharacter = () => {
    return (
      <>
        <CharacterStyled 
          heightChar= "15vh"
          image={(gameState === 'start') ? characterImg(characterEvent) : characterImg('idle')}
          position= {`${charCurrentPosition}vh`}
          widthChar= "10vh"
          zIndex= "2"
        />
        <Sound
          loop={soundLoop}
          playStatus={isJumping ? 'PLAYING' : 'STOPPED'}
          url={characterJump}
          volume={soundVolume}
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

const mapStateToProps = (state) => ({
  storeCharacter: state.characterReducer
});

export default connect(
  mapStateToProps,
  { charPosition, charReset }
)(Character);