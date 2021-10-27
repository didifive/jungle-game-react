import Sound from 'react-sound';

import backgroundSound from '../../assets/sound/578056_szegvari_forest-jungle-nature-dark-atmo.mp3';

import { ScenarioStyled } from './styled';

import Background from './components/BackgroundParalax';
import Ground from './components/Ground';

const soundBgAutoLoad = true;
const soundBgLoop = true;
const soundBgVolume = 40;

const Scenario = (props) => {

  const { gameState } = props;

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
    </ScenarioStyled>
  )
};

export default Scenario;