import { connect } from 'react-redux';

import { BackgroundParalax } from "./styled";

import bgPlxZero from "../../../../assets/img/background/plx-0.png";
import bgPlxOne from "../../../../assets/img/background/plx-1.png";
import bgPlxTwo from "../../../../assets/img/background/plx-2.png";
import bgPlxThree from "../../../../assets/img/background/plx-3.png";

const Background = (props) => {

  const { storeGame } = props;

  const listBgPlx = [
    {
      image: `${bgPlxZero}`,
      speed: '1800', 
      zIndex: '-998' 
    },
    {
      image: `${bgPlxOne}`,
      speed: '1500', 
      zIndex: '-997' 
    },
    {
      image: `${bgPlxTwo}`,
      speed: '1250', 
      zIndex: '-996' 
    },
    {
      image: `${bgPlxThree}`,
      speed: '1000', 
      zIndex: '-995' 
    }
  ];
  
  const renderBgPlx = (bgPlx, index) => {
    return (
      <BackgroundParalax 
        animate={(storeGame.game === 'start') ? 'running' : 'paused'}
        key={`bgPlx-${index}`}
        image={bgPlx.image} 
        speed={bgPlx.speed} 
        zIndex={bgPlx.zIndex}
      />
    )
  };

  return (
    <>
      {listBgPlx.map(renderBgPlx)}
    </>
  )
}

const mapStateToProps = (state) => ({
  storeGame: state.gameReducer
});

export default connect(
  mapStateToProps
)(Background);