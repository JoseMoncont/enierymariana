import React from 'react';
import Lottie from 'react-lottie';

interface LottieAnimationProps {
  animationData: object;  // Definimos el tipo de animationData como un objeto (puedes ser más específico si tienes un tipo concreto)
  height?: number;        // Opcional, con valor por defecto
  width?: number;         // Opcional, con valor por defecto
  loop?: boolean;         // Opcional, con valor por defecto
  autoplay?: boolean;     // Opcional, con valor por defecto
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  loop = true,
  autoplay = true,
}) => {
  const defaultOptions = {
    loop: loop,
    autoplay: autoplay,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions}  />;
};

export default LottieAnimation;