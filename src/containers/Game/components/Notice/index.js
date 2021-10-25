import { NoticeStyled } from "./styled";

const Notice = () => {
  return (
    <NoticeStyled>
      <div>
        <p>{'\u00A0'}Clique ou toque no {'\u00A0'}</p>
        <span>
          <i className="fas fa-play-circle"></i>
        </span>
        <p>{'\u00A0'} acima para iniciar, ou em {'\u00A0'}</p>
        <span>
          <i className="fas fa-info-circle"></i>
        </span>
        <p>{'\u00A0'} para informações.{'\u00A0'}</p>
      </div>
    </NoticeStyled>
  )
};

export default Notice