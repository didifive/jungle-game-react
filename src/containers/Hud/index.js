import { HudStyled } from './styled';

import Life from './components/Life';
import Record from './components/Record';
import Score from './components/Score';

function Hud(props) {

  const { gameState, life, record, score } = props;

  return (
    <HudStyled>
      {gameState === 'start' &&
          <div>
          <Life 
            life = {life}
          />
          <Score
            life = {life} 
            score = {score}
          />
        </div>
      }
      {record > 0 &&
        <Record 
          record = {record}
        />
      }
    </HudStyled>
  );
}

export default Hud;
