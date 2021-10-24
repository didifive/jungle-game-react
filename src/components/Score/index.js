import { useEffect } from 'react';
import { connect } from "react-redux";

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
      <h2>
        Score: {storeScore.score}
      </h2>
  )
};

const mapStateToProps = (state) => ({
  storeScore: state.scoreReducer
});

export default connect(
  mapStateToProps,
  { addScore }
)(Score);