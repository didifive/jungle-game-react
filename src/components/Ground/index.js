import jungleGround from "../../assets/img/jungle-ground.png";
import { GroundImage } from "./styled";

export const Ground = () => {
  return (
    <>
      <GroundImage
        image={jungleGround} 
        speed="600" 
        zIndex="0"
      />
    </>
  )
};