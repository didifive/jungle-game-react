import { connect } from 'react-redux';

import { HeaderStyled } from "./styled";

import { gameStart, gameStop } from "../../store/actions/game"

const Header = (props) => {

  const { gameStart, gameStop, storeGame } = props;

  const handleClickPlay = () => {
    gameStart();
  }

  const handleClickPause = () => {
    gameStop();
  }
  
  const handleClickInfo = () => {
    gameStop();
  }

  return (
    <HeaderStyled>
      <h1>
        Jungle IR
      </h1>
      <nav>
        {(storeGame.game === 'loaded' || storeGame.game === 'stop') && 
          <span onClick={handleClickPlay}>
            <i className="fas fa-play-circle"></i>
          </span>
        }
        {(storeGame.game === 'start') && 
          <span onClick={handleClickPause}>
            <i className="fas fa-pause-circle"></i>
          </span>
        }
        <span onClick={handleClickInfo}>
          <i className="fas fa-info-circle"></i>
        </span>
      </nav>
    </HeaderStyled>
  )
};

const mapStateToProps = (state) => ({
  storeGame: state.gameReducer,
});

export default connect(
  mapStateToProps,
  { gameStart, gameStop }
)(Header);