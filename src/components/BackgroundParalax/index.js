import bgPlxOne from "../../assets/img/background/plx-1.png"
import bgPlxTwo from "../../assets/img/background/plx-2.png"
import bgPlxThree from "../../assets/img/background/plx-3.png"
import bgPlxFour from "../../assets/img/background/plx-4.png"
import bgPlxFive from "../../assets/img/background/plx-5.png"
import { BackgroundParalax } from "./BackgroundParalax"

export const Background = () => {
  return (
    <>
      <BackgroundParalax image={bgPlxOne} speed="0s" zIndex="-5" />
      <BackgroundParalax image={bgPlxTwo} speed="1800s" zIndex="-4" />
      <BackgroundParalax image={bgPlxThree} speed="1500s" zIndex="-3" />
      <BackgroundParalax image={bgPlxFour} speed="1250s" zIndex="-2" />
      <BackgroundParalax image={bgPlxFive} speed="1000s" zIndex="-1" />
    </>
  )
}