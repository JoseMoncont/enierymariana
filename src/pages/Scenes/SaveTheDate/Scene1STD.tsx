import { motion } from "framer-motion";
import { FC } from "react";
import LottieAnimation from "../../../components/AnimacionLottie";
import Animacion from "../../..//assets/animations/sd.json";
import { useInView } from "react-intersection-observer";
import Logo from "../../../assets/images/Escudo1.png";
import Logo2 from "../../../assets/images/escudo2.png";

const SceneSTD1: FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.01,
  });

  return (
    <>
      <div
        ref={ref}
        className="h-screen w-screen color3 flex items-center justify-center relative overflow-hidden "
      >
        {/* Logo Posicionado en la esquina superior derecha */}
        <motion.div
          className="absolute top-10 right-10 z-10 lg:right-1/3" // Posición absoluta y z-index para estar encima
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img src={Logo2} alt="Logo" className=" h-24" />
        </motion.div>

        {/* Contenedor de la Animación Lottie */}
        <motion.div
          className="w-full h-full max-w-[1080px] max-h-[1920px] aspect-square lg:w-full lg:max-h-full"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <LottieAnimation
            animationData={Animacion}
            loop={true}
            autoplay={true}
          />
        </motion.div>
      </div>
    </>
  );
};

export default SceneSTD1;
