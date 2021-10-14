import React from "react";
import jungleGround from "../../assets/img/jungle-ground.png";
import { Ground } from "./Ground"

export const GroundImage = () => {
  return (
    <>
      <Ground image={jungleGround} speed="1000s" zIndex="0" />
    </>
  )
}