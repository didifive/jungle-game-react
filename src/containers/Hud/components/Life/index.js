import { connect } from "react-redux";

import characterIdle from "../../../../assets/img/character/idle.gif";

export const Life = (props) => {
  
  const { storeLife } = props;

  return (
      <>
        <img 
          alt="Character Hud"
          src={characterIdle}
        />
        <h3>
          {`x ${storeLife.life}`}
        </h3>
      </>
  )
};

const mapStateToProps = (state) => ({
  storeLife: state.lifeReducer
});

export default connect(
  mapStateToProps
)(Life);