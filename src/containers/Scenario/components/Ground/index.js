import { GroundImage } from "./styled";

import jungleGround from "../../../../assets/img/jungle-ground.png";


const Ground = (props) => {

  const { gameState } = props;

  return (
    <>
      <GroundImage
        animate={(gameState === 'start') ? 'running' : 'paused'}
        image={jungleGround} 
        speed="600" 
        zIndex="0"
      />
    </>
  )
};

export default Ground;