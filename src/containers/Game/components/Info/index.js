import { connect } from 'react-redux';

import { ModalStyled } from '../../../../components/Modal';

import elyonLogo from '../../../../assets/img/elyon-logo.png';

import { charReset } from "../../../../store/actions/character";
import { resetEnemies } from "../../../../store/actions/enemy";
import { gameReset, gameStart } from "../../../../store/actions/game";
import { resetLife } from "../../../../store/actions/life";
import { addRecord, resetScore } from "../../../../store/actions/score";


const Info = (props) => {

  const { addRecord, charReset, gameReset, gameStart, resetEnemies, resetLife, resetScore } = props;
  const { gameState, record, score } = props;
  
  const handleClickPlay = () => {
    gameStart();
  }

  const handleClickReset = () => {
    if (score > record) {
      addRecord(score);
    }
    resetScore();
    charReset();
    resetEnemies();
    resetLife();
    gameReset();
  }

  return (
    <ModalStyled>
      <div>
        {gameState === 'over' &&
          <h3>
            Você Morreu! Game Over!
          </h3>
        }
        {gameState === 'stop' &&
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
        <p
          className="highResolution"
        >
          Quer aprender e fazer um também? Acesse:{'\u00A0'}
           <a 
            href="https://digitalinnovation.one"
            target="_new">
            Digital Innovation One
          </a>
          .
        </p>
        <p
          className="highResolution"
        >
          Fontes e links úteis:{'\u00A0'}
           <a 
            href="https://code.visualstudio.com/"
            target="_new">
            Visual Studio Code
          </a>
          ,{'\u00A0'} 
          <a 
            href="https://nodejs.org/en/"
            target="_new">
            NodeJS
          </a>
          ,{'\u00A0'} 
          <a 
            href="https://reactjs.org/"
            target="_new">
            React
          </a>
          ,{'\u00A0'} 
          <a 
            href="https://styled-components.com/"
            target="_new">
            styled-components
          </a>
          ,{'\u00A0'} 
          <a 
            href="https://www.npmjs.com/package/react-sound"
            target="_new">
            react-sound
          </a>
          ,{'\u00A0'} 
          <a 
            href="https://www.npmjs.com/package/react-device-detect"
            target="_new">
            react-device-detect
          </a>
          ,{'\u00A0'} 
          <a 
            href="https://fonts.google.com/"
            target="_new">
            Google Fonts
          </a>
          ,{'\u00A0'} 
          <a 
            href="https://fontawesome.com/"
            target="_new">
            Font Awesome
          </a>
          ,{'\u00A0'} 
          <a 
            href="https://icons8.com/"
            target="_new">
            ICONS8
          </a>
          ,{'\u00A0'} 
          <a 
            href="https://www.gifmaker.me/"
            target="_new">
            GIFMaker
          </a>
          ,{'\u00A0'} 
          <a 
            href="https://favicon.io/"
            target="_new">
            Favicon.io
          </a>
          ,{'\u00A0'} 
          <a 
            href="https://itch.io/"
            target="_new">
            itch.io
          </a>
          ,{'\u00A0'} 
          <a 
            href="https://jesse-m.itch.io/jungle-pack"
            target="_new">
            Jungle Pack
          </a>
          ,{'\u00A0'}
          <a 
            href="https://luizmelo.itch.io/monsters-creatures-fantasy"
            target="_new">
            Monsters Creatures Fantasy
          </a>
          ,{'\u00A0'}
          <a 
            href="https://freesound.org/"
            target="_new">
            freesound
          </a>
          ,{'\u00A0'}
          <a 
            href="https://freesound.org/people/felixyadomi/sounds/456373/"
            target="_new">
            Jump Hop » hop9.wav
          </a>
          ,{'\u00A0'}
          <a 
            href="https://freesound.org/people/szegvari/sounds/578056/"
            target="_new">
            Forest jungle nature dark Atmo
          </a>
          ,{'\u00A0'}
          <a 
            href="https://freesound.org/people/MuzoTV/sounds/384903/"
            target="_new">
            Robotic Voice 'Now You Are Dead'
          </a>
          ,{'\u00A0'}
          <a 
            href="https://freesound.org/people/dersuperanton/sounds/437651/"
            target="_new">
            Damage Hit Voice Vocal
          </a>
          .
        </p>
        {gameState === 'over' &&
          <p 
            className="gameload"
            onClick={handleClickReset}
          >
            Reiniciar game
          </p>
        }
        {gameState === 'stop' &&
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
        onClick={gameState === 'stop' ? handleClickPlay : handleClickReset}
      ></span>
    </ModalStyled>
  )
};

export default connect(
  null,
  { addRecord, charReset, gameReset, gameStart, resetEnemies, resetLife, resetScore }
)(Info);