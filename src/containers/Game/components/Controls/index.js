import { NoticeStyled } from '../../../../components/Notice';

import spaceKey from '../../../../assets/img/icons8-space-key-48.png';
import touch from '../../../../assets/img/icons8-touchpad-50.png';


const Controls = (props) => {
  const { gameState } = props;
  
  return (
    <NoticeStyled>
      {(gameState === 'loaded' || gameState === 'stop') &&
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
      }

      {gameState === 'start' &&
        <div>
          <p>{'\u00A0'}Fuja dos inimigos:{'\u00A0'}</p>
          <p>Pressione [Espaço]{'\u00A0'}</p>
          <img 
            alt="tecla espaço"
            height="40px"
            src={spaceKey}
            widht="40px"
          />
          <p>{'\u00A0'}ou toque na tela{'\u00A0'}</p>
          <img 
            alt="touch"
            height="40px"
            src={touch}
            widht="40px"
          />
          <p>{'\u00A0'}para pular.{'\u00A0'}</p>
        </div>
      }
    </NoticeStyled>
  )
};

export default Controls