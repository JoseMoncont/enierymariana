import { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image3 from "../../assets/images/image3.png";
import LottieAnimation from "../../components/AnimacionLottie";
import BackgroundAnimation from "../../assets/animations/mapamundi.json";
import flor from "../../assets/animations/flores-h.json";

const Scene6: FC = () => {
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
          className="w-72 mb-5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}} // Anima solo si está en vista
          transition={{ delay: 0.5, duration: 1 }}
        >
         <img src={image3} alt="" />
        </motion.div>
      


        {/* Animación del texto */}
        <motion.div
          className="w-72"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}} // Anima solo si está en vista
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="text-white text-center text-lg petit">
            Hemos encontrado el amor en diferentes latitudes, y ahora uniremos
            nuestras vidas para siempre
          </p>
        </motion.div>
        <motion.div
          className="ms-5 me-5 md:w-96 w-52"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <LottieAnimation animationData={flor} loop={true} autoplay={true} />
        </motion.div>
        <div className="h-10 md:h-0"></div>
      </div>
    </>
  );
};

export default Scene6;
