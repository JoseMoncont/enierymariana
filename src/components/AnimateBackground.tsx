import { FC } from "react";
import LottieAnimation from "../components/AnimacionLottie";
import backgroundAnimation from "../assets/animations/mapamundi.json"; 

const BackgroundAnimation: FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      <LottieAnimation animationData={backgroundAnimation} loop={true} autoplay={true} />
    </div>
  );
};

export default BackgroundAnimation;
