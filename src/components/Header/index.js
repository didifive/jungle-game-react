import { HeaderStyled } from "./styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <h1>
        Jungle IR
      </h1>
      <nav>
        <span><i className="fas fa-play-circle"></i></span>
        <span><i className="fas fa-pause-circle"></i></span>
        <span><i className="fas fa-info-circle"></i></span>
      </nav>
    </HeaderStyled>
  )
};