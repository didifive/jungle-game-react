import { connect } from "react-redux";

import characterIdle from "../../assets/img/character/idle.gif";

import { handleLife } from '../../store/actions/life'

export const Score = (props) => {
  
  const { storeScore, storeLife, handleLife } = props;

  return (
      <>
        <img 
          alt="Character"
          src={characterIdle}
        />
        <h3>
          {`x ${storeLife.life}`}
        </h3>
      </>
  )
};

const mapStateToProps = (state) => ({
  storeScore: state.scoreReducer,
  storeLife: state.lifeReducer,
});

export default connect(
  mapStateToProps,
  { handleLife }
)(Score);