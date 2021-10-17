import { ScoreStyled } from "./styled";

export const Score = (props) => {
  
  const { score } = props;

  return (
    <ScoreStyled>
      <h2>
        Score: {score}
      </h2>
    </ScoreStyled>
  )
};