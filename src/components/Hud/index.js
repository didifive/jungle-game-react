import { HudStyled } from './styled';
import Life from '../Life';
import Score from '../Score';

function Hud() {
  return (
    <HudStyled>
      <Life />
      <Score />
    </HudStyled>
  );
}

export default Hud;