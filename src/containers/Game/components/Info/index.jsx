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
    // Só inicia o jogo se já tiver sido jogado antes (score > 0)
    if (score > 0) {
      gameStart();
    } else {
      gameReset(); // Apenas fecha o modal
    }
  }

  const handleClickReset = () => {
    if (score > record) {
      localStorage.setItem('record', score);
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
            Game Over! Você foi derrotado pela floresta!
          </h3>
        }
        {gameState === 'stop' &&
          <h3>
            Bem-vindo ao Jungle Infinite Runner
          </h3>
        }
        <p>
          Você é Josué, um pescador que se viu preso em uma floresta desconhecida. Sua única chance de sobrevivência é fugir dos perigos que a cercam!
        </p>
        <p>
          <strong>Como Jogar:</strong> Pressione a barra de espaço ou toque na tela para pular e desviar dos inimigos.
        </p>
        <p>
          Cada colisão com um inimigo faz você perder uma vida. A cada 200 pontos, você ganha uma vida extra (máximo de 5 vidas).
        </p>
        <p>
          <strong>Controles:</strong>
          <br />• Espaço ou Toque: Pular
          <br />• Play/Pause: Iniciar ou pausar o jogo
          <br />• Info: Mostrar estas instruções
          <br />• Volume: Ligar/desligar som
        </p>
        <p>
          <i>
            Josué estava pescando quando caiu no sono. De repente, acordou sozinho na floresta. Ouviu uivos de lobo e chiados de coruja. Assustado, começou a correr, sem saber os perigos que enfrentaria...
          </i>
        </p>
        <p>
          Game desenvolvido em React com Redux e Vite.&nbsp;
          <strong>Versão: {import.meta.env.VITE_APP_VERSION}</strong>
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
            {score > 0 ? 'Voltar ao game' : 'Fechar'}
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
