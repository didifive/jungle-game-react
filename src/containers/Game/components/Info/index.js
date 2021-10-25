import { connect } from 'react-redux';

import { ModalStyled } from '../../../../components/Modal';

import elyonLogo from '../../../../assets/img/elyon-logo.png';

import { gameStart } from "../../../../store/actions/game";

const Info = (props) => {

  const { gameStart } = props;

  const handleClickPlay = () => {
    gameStart();
  }

  return (
    <ModalStyled>
      <div>
        <h3>
          Bem-vindo ao game Jungle Infinte Runner
        </h3>
        <p>
          Você deve fugir dos perigos da floresta, seu único recurso é pular!
        </p>
        <p>
          Para pular, você deve:
        </p>
        <p>
          Para abrir o jogo clique ou toque em "play" no canto superior direito.
        </p>
        <p>
          Para pausar o game, clique ou toque em "pause" ou "informação".
        </p>
        <p>
          Sinopse: Josué, pescador, estava na calmaria da pescaria, até que de tão calmo caiu no sono. De repente ele acorda e se vê sozinho no meio de uma floresta, então ele escuta um lobo uivar e uma coruja chirriar e, assustado, sem arma e sozinho, começa a correr mesmo sem saber que rumo tomar ou que perigos vai encontrar...
        </p>
        <p>
          Link da fonte do projeto:{'\u00A0'}
           <a 
            href="https://github.com/didifive/jungle-game-react"
            target="_new">
            didifive/jungle-game-react
          </a>
        </p>
        <img 
          alt="Logo Elyon"
          src={elyonLogo}
          height="50px"
          width="147.125px"
        />
      </div>
      <span 
        className="background"
        onClick={handleClickPlay}
      ></span>
    </ModalStyled>
  )
};

const mapStateToProps = (state) => ({
  storeGame: state.gameReducer,
});

export default connect(
  mapStateToProps,
  { gameStart }
)(Info);