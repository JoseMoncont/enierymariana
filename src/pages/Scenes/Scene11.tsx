import { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import LottieAnimation from "../../components/AnimacionLottie";
import BackgroundAnimation from "../../assets/animations/mapamundi.json";
import Novios from "../../assets/animations/hearth.json";
import CountdownTimer from "../../components/CountdownTimer";

const Scene11: FC = () => {
  // Detecta si el componente está en el viewport
  const { ref, inView } = useInView({
    triggerOnce: false, // Para que la animación ocurra solo la primera vez que aparece
    threshold: 0.3, // Inicia la animación cuando el 30% de la escena es visible
  });

  return (
    <>
      <div className="absolute inset-0 w-full h-full -z-1 ">
        <LottieAnimation
          animationData={BackgroundAnimation}
          loop={true}
          autoplay={true}
        />
      </div>
      <div
        ref={ref} // Ref necesario para detectar la visibilidad
        className="h-screen w-screen flex flex-col items-center justify-center"
      >
        {/* Animación del texto */}

        <motion.div
          className="w-72"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}} // Anima solo si está en vista
          transition={{ delay: 0.5, duration: 1 }}
        >
          <LottieAnimation
            animationData={Novios}
            loop={true}
            autoplay={true}
          ></LottieAnimation>
        </motion.div>
        <motion.div
          className="w-72"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}} // Anima solo si está en vista
          transition={{ delay: 0.5, duration: 1 }}
        >
          <CountdownTimer></CountdownTimer>
        </motion.div>
        <div className="h-10 md:h-0"></div>
      </div>
    </>
  );
};

export default Scene11;
