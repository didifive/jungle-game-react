import { connect } from 'react-redux';
import { useCallback, memo } from 'react';
import PropTypes from 'prop-types';

import { HeaderStyled } from './styled';

import { gameStart, gameStop } from '../../../../store/actions/game'
import { playBgm, playSoundEffects, stopBgm, stopSoundEffects } from '../../../../store/actions/sounds';

const Header = (props) => {

  const { gameStart, gameStop, playBgm, playSoundEffects, stopBgm, stopSoundEffects } = props;
  const { bgm, gameState, soundEffects } = props;

  const handleClickInfo = useCallback(() => {
    gameStop();
  }, [gameStop]);
  
  const playGame = useCallback(() => {
    gameStart();
  }, [gameStart]);
  
  const pauseGame = useCallback(() => {
    gameStop();
  }, [gameStop]);
  
  const volumeOff = useCallback(() => {
    stopBgm();
    stopSoundEffects();
  }, [stopBgm, stopSoundEffects]);
  
  const volumeOn = useCallback(() => {
    playBgm();
    playSoundEffects();
  }, [playBgm, playSoundEffects]);

  return (
    <HeaderStyled>
      <h1>
        Jungle IR
      </h1>
      <nav>
        {(gameState === 'loaded' || gameState === 'stop') && 
          <button onClick={playGame}>
            <i className="fas fa-play-circle"></i>
          </button>
        }
        {(gameState === 'start') && 
          <button onClick={pauseGame}>
            <i className="fas fa-pause-circle"></i>
          </button>
        }
        <button onClick={handleClickInfo}>
          <i className="fas fa-info-circle"></i>
        </button>
        {(bgm && soundEffects) && 
          <button onClick={volumeOff}>
            <i className="fas fa-volume-up"></i>
          </button>
        }
        {(!bgm && !soundEffects) && 
          <button onClick={volumeOn}>
            <i className="fas fa-volume-mute"></i>
          </button>
        }
      </nav>
    </HeaderStyled>
  )
};

Header.propTypes = {
  gameStart: PropTypes.func.isRequired,
  gameStop: PropTypes.func.isRequired,
  playBgm: PropTypes.func.isRequired,
  playSoundEffects: PropTypes.func.isRequired,
  stopBgm: PropTypes.func.isRequired,
  stopSoundEffects: PropTypes.func.isRequired,
  bgm: PropTypes.bool.isRequired,
  gameState: PropTypes.string.isRequired,
  soundEffects: PropTypes.bool.isRequired,
};

export default connect(
  null,
  { gameStart, gameStop, playBgm, playSoundEffects, stopBgm, stopSoundEffects }
)(memo(Header));