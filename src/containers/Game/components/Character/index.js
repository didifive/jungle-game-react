import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { CharacterStyled, characterImg } from "./styled";

import { charPosition, charReset } from '../../../../store/actions/character'

const Character = (props) => {

  const { storeCharacter, charPosition, charReset, storeGame } = props;
  
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
      window.document.addEventListener('keyup', handleKeyUpAndTouch);
      window.document.addEventListener('touchend', handleKeyUpAndTouch);
      return () => {
        window.document.removeEventListener('keyup', handleKeyUpAndTouch);
        window.document.removeEventListener('touchend', handleKeyUpAndTouch);
      }
    } 
  });

  const gameState = storeGame.game
  
  useEffect(() => {
    if (gameState === 'start') {
      const jumpInterval = setInterval(() => {
        if (isJumping && !isLanding) {
          setCharacterEvent('jump');
          charPosition(1);
          if (storeCharacter.position >= 42) {
            setIsJumping(false);
            setIsLanding(true);
          }
        } else if (!isJumping && isLanding) {
          setCharacterEvent('landing');
          charPosition(-1);
          if (storeCharacter.position <= 8) {
            setIsLanding(false);
          }
        } else {
          setCharacterEvent('run');
        }
      }, 10);
      return () => clearInterval(jumpInterval);
    } else {
      charReset();
    }
  });

  const renderCharacter = () => {
    return (
      <CharacterStyled 
        heightChar= "15vh"
        image={(storeGame.game === 'start') ? characterImg(characterEvent) : characterImg('idle')}
        position= {`${storeCharacter.position}vh`}
        widthChar= "10vh"
        zIndex= "2"
      />
    )
  };

  return (
    <>
      {renderCharacter()}
    </>
  )
};

const mapStateToProps = (state) => ({
  storeCharacter: state.characterReducer,
  storeGame: state.gameReducer
});

export default connect(
  mapStateToProps,
  { charPosition, charReset }
)(Character);