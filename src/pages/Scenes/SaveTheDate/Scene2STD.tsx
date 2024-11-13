import { motion } from "framer-motion";
import { FC } from "react";
import { useInView } from "react-intersection-observer";
import Title from "../../../assets/animations/title.json";
import flores from "../../..//assets/animations/flores-h.json";
import LottieAnimation from "../../../components/AnimacionLottie";
import Anillos from "../../../assets/images/boda2.png";
import Ornamet from "../../../assets/icons/01.svg";

import BackgroundAnimation from "../../../assets/animations/mapa2.json";

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
        <div className=" border-2 colorPrimario rounded-t-full z-0 mx-8 px-2 py-4 rounded-b-full ">
          <div className="h-10"></div>
          <motion.div
            className="h-16 w-16 m-auto"
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}} // Anima solo si está en vista
            transition={{ duration: 1 }}
          >
            <img className="text-dark" src={Anillos} alt="anillos" />
          </motion.div>
          <motion.div
            className="mb-5"
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}} // Anima solo si está en vista
            transition={{ duration: 1 }}
          >
            <p className="luxurious text-6xl text-center">Nuestra Boda</p>
          </motion.div>

          <motion.div
            className="m-auto mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}} // Anima solo si está en vista
            transition={{ duration: 1 }}
          >
            <img src={Ornamet} className="color2 h-5 m-auto" alt="" />
          </motion.div>

          <motion.div
            className="m-10 md:w-96"
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}} // Anima solo si está en vista
            transition={{ duration: 1 }}
          >
            <LottieAnimation
              animationData={Title}
              loop={false}
              autoplay={true}
            />
          </motion.div>
          <motion.div
            className=""
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}} // Anima solo si está en vista
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="fuente-principal text-center colorSecundario">
              15.03.2025
            </p>
          </motion.div>
          <div className="mt-5 mb-5 d-flex justify-center">
            <motion.div
              className=""
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}} // Anima solo si está en vista
              transition={{ delay: 0.5, duration: 1 }}
            >
              <p className="fuente-principal text-center">PUERTO COLOMBIA</p>
              <p className="fuente-principal text-center text-sm colorSecundario">
                ATL, COL
              </p>
            </motion.div>
          </div>
          <motion.div
            className="w-40 m-auto d-flex justify-center"
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
        </div>

        <div className="h-10 md:h-0"></div>
      </div>
    </>
  );
};

export default SceneSTD2;
