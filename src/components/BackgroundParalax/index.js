import bgPlxOne from "../../assets/img/background/plx-1.png"
import bgPlxTwo from "../../assets/img/background/plx-2.png"
import bgPlxThree from "../../assets/img/background/plx-3.png"
import bgPlxFour from "../../assets/img/background/plx-4.png"
import bgPlxFive from "../../assets/img/background/plx-5.png"
import { BackgroundParalax } from "./styled"

export const Background = () => {
  const listBgPlx = [
    {
      image: `${bgPlxOne}`,
      speed: '0', 
      zIndex: '-5'
    },
    {
      image: `${bgPlxTwo}`,
      speed: '1800', 
      zIndex: '-4' 
    },
    {
      image: `${bgPlxThree}`,
      speed: '1500', 
      zIndex: '-3' 
    },
    {
      image: `${bgPlxFour}`,
      speed: '1250', 
      zIndex: '-2' 
    },
    {
      image: `${bgPlxFive}`,
      speed: '1000', 
      zIndex: '-1' 
    }
  ]
  
  const renderBgPlx = (bgPlx, index) => {
    return (
      <BackgroundParalax 
        key={`bgPlx-${index}`}
        image={bgPlx.image} 
        speed={bgPlx.speed} 
        zIndex={bgPlx.zIndex}
      />
    )
  }

  return (
    <>
      {listBgPlx.map(renderBgPlx)}
    </>
  )
}