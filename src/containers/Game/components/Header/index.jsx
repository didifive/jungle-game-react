import { connect } from 'react-redux';

import { HeaderStyled } from './styled';

import { gameStart, gameStop } from '../../../../store/actions/game'
import { playBgm, playSoundEffects, stopBgm, stopSoundEffects } from '../../../../store/actions/sounds';

const Header = (props) => {

  const { gameStart, gameStop, playBgm, playSoundEffects, stopBgm, stopSoundEffects } = props;
  const { bgm, gameState, soundEffects } = props;

  const handleClickInfo = () => {
    gameStop();
  }
  
  const playGame = () => {
    gameStart();
  }
  
  const pauseGame = () => {
    gameStop();
  }
  
  const volumeOff = () => {
    stopBgm();
    stopSoundEffects();
  }
  
  const volumeOn = () => {
    playBgm();
    playSoundEffects();
  }

  return (
    <HeaderStyled>
      <h1>
        Jungle IR
      </h1>
      <nav>
        {(gameState === 'loaded' || gameState === 'stop') && 
          <span onClick={playGame}>
            <i className="fas fa-play-circle"></i>
          </span>
        }
        {(gameState === 'start') && 
          <span onClick={pauseGame}>
            <i className="fas fa-pause-circle"></i>
          </span>
        }
        <span onClick={handleClickInfo}>
          <i className="fas fa-info-circle"></i>
        </span>
        {(bgm && soundEffects) && 
          <span onClick={volumeOff}>
            <i className="fas fa-volume-up"></i>
          </span>
        }
        {(!bgm && !soundEffects) && 
          <span onClick={volumeOn}>
            <i className="fas fa-volume-mute"></i>
          </span>
        }
      </nav>
    </HeaderStyled>
  )
};

export default connect(
  null,
  { gameStart, gameStop, playBgm, playSoundEffects, stopBgm, stopSoundEffects }
)(Header);