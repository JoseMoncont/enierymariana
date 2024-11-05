import { motion } from "framer-motion";
import { FC } from "react";
import { useInView } from "react-intersection-observer";
import Title from "../../../assets/animations/title.json";
import flores from "../../..//assets/animations/flores-h.json";
import LottieAnimation from "../../../components/AnimacionLottie";

import BackgroundAnimation from "../../../assets/animations/fondo2.json";

const SceneSTD2: FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.01,
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
        className="h-screen w-screen flex flex-col items-center justify-center color3"
      >
        {/* Animación de la imagen */}
        <motion.div
          className="m-10 md:w-96"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} // Anima solo si está en vista
          transition={{ duration: 1 }}
        >
          {" "}
          <LottieAnimation animationData={Title} loop={true} autoplay={true} />
        </motion.div>

        {/* Animación del texto */}
        <motion.div
          className="w-72"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}} // Anima solo si está en vista
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="fuente-principal text-center colorSecundario">15.02.2025</p>
        </motion.div>

        <div className="mt-5 mb-5 d-flex justify-center">
          <motion.div
            className="w-72"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}} // Anima solo si está en vista
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="fuente-principal text-center">PUERTO COLOMBIA</p>
            <p className="fuente-principal text-center text-sm colorSecundario">ATL, COL</p>
          </motion.div>
        </div>
        <motion.div
          className="w-40"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}} // Anima solo si está en vista
          transition={{ delay: 0.5, duration: 1 }}
        >
          <LottieAnimation
            animationData={flores}
            loop={true}
            autoplay={true}
          ></LottieAnimation>
        </motion.div>
        <div className="mt-5 mb-5 d-flex justify-center">
          <motion.div
            className="w-72"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}} // Anima solo si está en vista
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="text-xs fuente-principal mb-4">
              Confirma tu asistencia
            </p>
            <button className="btn btn-primary fuente-principal uppercase border-2 border-blue-300 p-2 mb-4 colorSecundario">
              Confirma con Mariana
            </button>
            <button className="btn btn-primary fuente-principal uppercase border-2 p-2  text-center">
              Confirma con Enier
            </button>
          </motion.div>
        </div>

        <div className="h-10 md:h-0"></div>
      </div>
    </>
  );
};

export default SceneSTD2;
