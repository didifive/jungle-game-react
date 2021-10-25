import { connect } from 'react-redux';

import { GroundImage } from "./styled";

import jungleGround from "../../../../assets/img/jungle-ground.png";


const Ground = (props) => {

  const { storeGame } = props;

  return (
    <>
      <GroundImage
        className={(storeGame.game === 'start') ? 'animate' : 'paused'}
        image={jungleGround} 
        speed="600" 
        zIndex="0"
      />
    </>
  )
};

const mapStateToProps = (state) => ({
  storeGame: state.gameReducer
});

export default connect(
  mapStateToProps
)(Ground);