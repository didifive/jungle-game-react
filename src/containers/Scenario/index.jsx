import { useRef, useEffect } from 'react';

import backgroundSound from '../../assets/sound/578056_szegvari_forest-jungle-nature-dark-atmo.mp3';

import { ScenarioStyled } from './styled';

import Background from './components/BackgroundParalax';
import Ground from './components/Ground';

const Scenario = (props) => {

  const { bgm, gameState } = props;
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (bgm && gameState === 'start') {
        audioRef.current.volume = 0.4;
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [bgm, gameState]);

  return (
    <ScenarioStyled>
      <Background
        gameState = {gameState}
      />
      <Ground 
        gameState = {gameState}
      />
      <audio 
        ref={audioRef} 
        src={backgroundSound}
        loop
        style={{ display: 'none' }}
      />
    </ScenarioStyled>
  )
};

export default Scenario;