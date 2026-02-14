import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { connect } from 'react-redux';

import { CharacterStyled, characterImg } from './styled';

import characterJumpSound from '../../../../assets/sound/456373__felixyadomi__hop9.mp3';

import { charPosition, charReset } from '../../../../store/actions/character';

const Character = (props) => {

  const { charPosition, charReset } = props;
  const { characterCurrentPosition, gameState, soundEffects } = props;
  
  const [isJumping, setIsJumping] = useState(false);
  const [isLanding, setIsLanding] = useState(false);
  const [characterEvent, setCharacterEvent] = useState('run');
  const audioRef = useRef(null);
  const isJumpingRef = useRef(false);
  const isLandingRef = useRef(false);
  
  // Sincroniza refs com states
  useEffect(() => {
    isJumpingRef.current = isJumping;
    isLandingRef.current = isLanding;
  }, [isJumping, isLanding]);
  
  // Memoiza a imagem do personagem
  const currentCharacterImage = useMemo(() => characterImg(characterEvent), [characterEvent]);
  
  // useCallback para event handler evitar recriação
  const handleKeyUpAndTouch = useCallback((e) => {
    if (e.keyCode === 32 || e.type === 'touchend') {
      // Só permite pular se não estiver pulando nem pousando
      if (!isJumpingRef.current && !isLandingRef.current) {
        setIsJumping(true);
      }
    }
  }, []);
  
  useEffect(() => {
    if (gameState === 'start') {
      const jumpInterval = setInterval(() => {
        if (isJumping && !isLanding) {
          setCharacterEvent('jump');
          charPosition(1);
          if (soundEffects && characterCurrentPosition === 8) {
            if (audioRef.current) {
              audioRef.current.currentTime = 0;
              audioRef.current.play();
            }
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
      // Quando pausado ou game over, personagem fica idle
      setCharacterEvent('idle');
      setIsJumping(false);
      setIsLanding(false);
      charReset();
    }
  },[characterCurrentPosition, charPosition, charReset, gameState, isJumping, isLanding, soundEffects, handleKeyUpAndTouch]);

  return (
    <>
      <audio ref={audioRef} src={characterJumpSound} />
      <CharacterStyled 
        $heightChar="15vh"
        $image={currentCharacterImage}
        $position={`${characterCurrentPosition}vh`}
        $widthChar="10vh"
        $zIndex="2"
      />
    </>
  )
};

export default connect(
  null,
  { charPosition, charReset }
)(Character);