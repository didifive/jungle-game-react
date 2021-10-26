import { useState } from 'react';

import Sound from 'react-sound';

import backgroundSound from '../../assets/sound/578056_szegvari_forest-jungle-nature-dark-atmo.mp3';
import gameOverSound from '../../assets/sound/384903__muzotv__robotic-voice-now-you-are-dead-hd.mp3';

import { ScenarioStyled } from './styled';

import Background from './components/BackgroundParalax';
import Ground from './components/Ground';

const Scenario = (props) => {

  const { gameState } = props;

  const [soundGameOver, setSoundGameOver] = useState(true);

  const soundBgAutoLoad = true;
  const soundBgLoop = true;
  const soundBgVolume = 40;
  const soundGameOverAutoLoad = true;
  const soundGameOverLoop = false;
  const soundGameOverVolume = 50;

  if (!soundGameOver && gameState === 'start') {
    setSoundGameOver(true);
  }

  return (
    <ScenarioStyled>
      <Background
        gameState = {gameState}
      />
      <Ground 
        gameState = {gameState}
      />
      <Sound
        autoLoad={soundBgAutoLoad}
        loop={soundBgLoop}
        playStatus={gameState === 'start' ? 'PLAYING' : 'PAUSED'}
        url={backgroundSound}
        volume={soundBgVolume}
      />
      <Sound
        autoLoad ={soundGameOverAutoLoad}
        loop={soundGameOverLoop}
        playStatus={(gameState === 'over' && soundGameOver) ? 'PLAYING' : 'STOPPED'}
        url={gameOverSound}
        volume={soundGameOverVolume}
        onFinishedPlaying={() => setSoundGameOver(false)}
      />
    </ScenarioStyled>
  )
};

export default Scenario;