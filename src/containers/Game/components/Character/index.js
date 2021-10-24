import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { CharacterStyled, characterImg } from "./styled";

import { charPosition } from '../../../../store/actions/character'

const Character = (props) => {

  const { storeCharacter, charPosition } = props;
  
  const [isJumping, setIsJumping] = useState(false);
  const [isLanding, setIsLanding] = useState(false);
  const [characterEvent, setCharacterEvent] = useState('run');
  
  useEffect(() => {
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
  });

  useEffect(() => {
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
  });

  const renderCharacter = () => {
    return (
      <CharacterStyled 
        heightChar= "15vh"
        image={characterImg(characterEvent)}
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
  storeCharacter: state.characterReducer
});

export default connect(
  mapStateToProps,
  { charPosition }
)(Character);