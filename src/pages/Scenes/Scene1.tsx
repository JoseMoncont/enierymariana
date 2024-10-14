import { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LottieAnimation from "../../components/AnimacionLottie";
import Mapa from "../../assets/animations/mapa.json";
import EyM from "../../assets/images/EyM.png";
import BackgroundAnimation from "../../assets/animations/mapamundi.json";

const Scene1: FC = () => {
  // Hook para detectar si la escena está visible
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.01, // Animación se activa cuando el 1% de la escena es visible
  });

  return (
    <>
      {/* Contenedor de la animación de fondo */}
      <div className="absolute inset-0 w-full h-full -z-1 ">
        <LottieAnimation
          animationData={BackgroundAnimation}
          loop={true}
          autoplay={true}
        />
      </div>

      <div
        ref={ref} // Referencia para la detección de la visibilidad
        className="h-screen w-screen flex flex-col items-center justify-center relative"
      >
        {/* Animación de la imagen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <img src={EyM} alt="EyM" className="w-40" />
        </motion.div>

        {/* Animación del mapa */}
        <motion.div
          className="ms-5 me-5 md:w-96"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <LottieAnimation animationData={Mapa} loop={true} autoplay={true} />
        </motion.div>

        {/* Animación del texto */}
        <motion.div
          className="w-72"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 1 }}
        >
          <p className="carattere-text text-white text-4xl text-center">
            El viaje de nuestras vidas comienza aquí.
          </p>
        </motion.div>
        <div className="h-10 md:h-0"></div>
      </div>
    </>
  );
};

export default Scene1;
