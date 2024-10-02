import { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LottieAnimation from "../../components/AnimacionLottie";
import Mapa from "../../assets/animations/mapa.json";
import EyM from "../../assets/images/EyM.png";

const Scene1: FC = () => {
  // Hook para detectar si la escena está visible
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01, // Animación se activa cuando el 30% de la escena es visible
  });

  return (
    <>
      <div
        ref={ref} // Referencia para la detección de la visibilidad
        className="h-screen w-screen flex flex-col items-center justify-center"
      >
        {/* Animación de la imagen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <img src={EyM} alt="EyM" className="w-52" />
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
      </div>
    </>
  );
};

export default Scene1;
