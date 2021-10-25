import { HudStyled } from './styled';

import Life from './components/Life';
import Record from './components/Record';
import Score from './components/Score';

function Hud() {
  return (
    <HudStyled>
      <div>
        <Life />
        <Score />
      </div>
      <Record />
    </HudStyled>
  );
}

export default Hud;