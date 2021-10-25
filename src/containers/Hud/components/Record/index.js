import { connect } from "react-redux";

export const Record = (props) => {
  
  const { storeScore } = props;

  return (
      <h2>
        Record: {storeScore.record}
      </h2>
  )
};

const mapStateToProps = (state) => ({
  storeScore: state.scoreReducer,
});

export default connect(
  mapStateToProps
)(Record);