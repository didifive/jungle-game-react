import { useState, useEffect } from 'react';
import { connect } from "react-redux";

import { addScore } from '../../../../store/actions/score'
import { handleLife } from '../../../../store/actions/life';

export const Score = (props) => {
  
  const { storeScore, addScore, handleLife, storeLife } = props;

  const [addLifeBreak, setAddLifeBreak] = useState(1);

  const score = storeScore.score ;
  const lifes = storeLife.life;

  useEffect(() => {
    const scoreTimer = setInterval(() => {
      addScore(1);
    }, 1000);
    if (
        ((score / (45 * addLifeBreak)) > 1) &&
        (lifes < 5) 
      ){
      handleLife(1);
      setAddLifeBreak(addLifeBreak + 1);
    }
    return () => clearInterval(scoreTimer);
  },[addLifeBreak, addScore, handleLife, lifes, score])


  return (
      <h2>
        Score: {score}
      </h2>
  )
};

const mapStateToProps = (state) => ({
  storeScore: state.scoreReducer,
  storeLife: state.lifeReducer
});

export default connect(
  mapStateToProps,
  { addScore, handleLife }
)(Score);