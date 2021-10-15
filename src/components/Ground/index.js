import jungleGround from "../../assets/img/jungle-ground.png";
import { GroundImage } from "./GroundImage"

export const Ground = () => {
  return (
    <>
      <GroundImage
        image={jungleGround} 
        speed="600s" 
        zIndex="0"
      />
    </>
  )
}