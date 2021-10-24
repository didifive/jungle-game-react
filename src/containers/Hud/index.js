import { HudStyled } from './styled';
import Life from './components/Life';
import Score from './components/Score';

function Hud() {
  return (
    <HudStyled>
      <Life />
      <Score />
    </HudStyled>
  );
}

export default Hud;