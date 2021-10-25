import { connect } from 'react-redux';

import { ModalStyled } from '../../../../components/Modal';

import elyonLogo from '../../../../assets/img/elyon-logo.png';

import { gameStart } from "../../../../store/actions/game";

const Info = (props) => {

  const { storeGame, gameStart } = props;

  const handleClickPlay = () => {
    gameStart();
  }

  const handleClickReset = () => {
    gameStart();
  }

  return (
    <ModalStyled>
      <div>
        {storeGame.game === 'over' &&
          <h3>
            GAME OVER!
          </h3>
        }
        {storeGame.game === 'stop' &&
          <h3>
            Bem-vindo ao game Jungle Infinte Runner.
          </h3>
        }
        <p>
          Você deve fugir dos perigos da floresta, seu único recurso é pular!
        </p>
        <p>
          Para pular você pode apertar a tecla Espaço ou, para dispositivos com touchscreen, tocar na tela.
        </p>
        <p>
          Para abrir o jogo clique ou toque em "play" no canto superior direito. Para pausar o game, clique ou toque em "pause" ou "informação".
        </p>
        <p>
          Cada vez que não escapar de um inimigo irá perder uma vida. A cada 200 pontos de score, você ganhará uma nova vida, com limite de 5 vidas.
        </p>
        <p>
          <i>
            Sinopse: Josué, pescador, estava na calmaria da pescaria, até que de tão calmo caiu no sono. De repente ele acorda e se vê sozinho no meio de uma floresta, então ele escuta um lobo uivar e uma coruja chirriar e, assustado, sem arma e sozinho, começa a correr mesmo sem saber que rumo tomar ou que perigos vai encontrar...
          </i>
        </p>
        <p>
          Game construído em React com Redux.
        </p>
        <p>
          Link da fonte deste game:{'\u00A0'}
           <a 
            href="https://github.com/didifive/jungle-game-react"
            target="_new">
            didifive/jungle-game-react
          </a>
          .
        </p>
        <p>
          Quer aprender e fazer um também? Acesse:{'\u00A0'}
           <a 
            href="https://digitalinnovation.one"
            target="_new">
            Digital Innovation One
          </a>
          .
        </p>
        {storeGame.game === 'over' &&
          <p 
            className="gameload"
            onClick={handleClickReset}
          >
            Reiniciar game
          </p>
        }
        {storeGame.game === 'stop' &&
          <p 
            className="gameload"
            onClick={handleClickPlay}
          >
            Voltar ao game
          </p>
        }
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