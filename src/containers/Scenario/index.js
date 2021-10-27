import Sound from 'react-sound';

import backgroundSound from '../../assets/sound/578056_szegvari_forest-jungle-nature-dark-atmo.mp3';

import { ScenarioStyled } from './styled';

import Background from './components/BackgroundParalax';
import Ground from './components/Ground';

const soundBgLoop = true;
const soundBgVolume = 40;

const Scenario = (props) => {

  const { bgm, gameState } = props;

  return (
    <ScenarioStyled>
      <Background
        gameState = {gameState}
      />
      <Ground 
        gameState = {gameState}
      />
      <Sound
        loop={soundBgLoop}
        playStatus={(bgm && gameState === 'start') ? 'PLAYING' : 'PAUSED'}
        url={backgroundSound}
        volume={soundBgVolume}
      />
    </ScenarioStyled>
  )
};

export default Scenario;