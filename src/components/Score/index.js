import { useEffect } from 'react';
import { connect } from "react-redux";

import { ScoreStyled } from "./styled";

import { addScore } from '../../store/actions/score'

export const Score = (props) => {
  
  const { storeScore, addScore } = props;

  useEffect(() => {
    const scoreTimer = setInterval(() => {
      addScore(1);
    }, 1000);
    return () => clearInterval(scoreTimer);
  })

  return (
    <ScoreStyled>
      <h2>
        Score: {storeScore.score}
      </h2>
    </ScoreStyled>
  )
};

const mapStateToProps = (state) => ({
  storeScore: state.scoreReducer
});

export default connect(
  mapStateToProps,
  { addScore }
)(Score);