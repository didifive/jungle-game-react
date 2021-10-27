import { useState, useEffect } from 'react';
import { connect } from "react-redux";

import { addScore } from '../../../../store/actions/score'
import { handleLife } from '../../../../store/actions/life';

export const Score = (props) => {
  
  const { addScore, handleLife } = props;
  const { score, life } = props;

  const [addLifeBreak, setAddLifeBreak] = useState(1);

  useEffect(() => {
    const scoreTimer = setInterval(() => {
      addScore(1);
    }, 1000);
    if (
        ((score / (200 * addLifeBreak)) > 1) &&
        (life < 5) 
      ){
      handleLife(1);
      setAddLifeBreak(a => addLifeBreak + 1);
    }
    return () => clearInterval(scoreTimer);
  },[addLifeBreak, addScore, handleLife, life, score])


  return (
      <h2>
        Score: {score}
      </h2>
  )
};

export default connect(
  null,
  { addScore, handleLife }
)(Score);