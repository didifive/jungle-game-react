import { connect } from "react-redux";

import { HudStyled } from './styled';

import Life from './components/Life';
import Record from './components/Record';
import Score from './components/Score';

function Hud(props) {

  const { storeScore } = props;

  return (
    <HudStyled>
      <div>
        <Life />
        <Score />
      </div>
      {storeScore.record > 0 && <Record />}
    </HudStyled>
  );
}

const mapStateToProps = (state) => ({
  storeScore: state.scoreReducer,
});

export default connect(
  mapStateToProps
)(Hud);