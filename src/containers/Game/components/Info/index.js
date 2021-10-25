import { connect } from 'react-redux';

import { ModalStyled } from '../../../../components/Modal'

import { gameStart } from "../../../../store/actions/game"

const Info = (props) => {

  const { gameStart } = props;

  const handleClickPlay = () => {
    gameStart();
  }

  return (
    <ModalStyled>
      <div>
        <p>{'\u00A0'}Clique ou toque no {'\u00A0'}</p>
        <p>{'\u00A0'} acima para iniciar, ou em {'\u00A0'}</p>
        <p>{'\u00A0'} para informações.{'\u00A0'}</p>
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