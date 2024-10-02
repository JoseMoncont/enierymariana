import { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image2 from "../../assets/images/image2.png";
import LottieAnimation from "../../components/AnimacionLottie";
import BackgroundAnimation from "../../assets/animations/mapamundi.json"; 


const Scene3: FC = () => {
  // Detecta si el componente está en el viewport
  const { ref, inView } = useInView({
    triggerOnce: false, // Para que la animación ocurra solo la primera vez que aparece
    threshold: 0.3,    // Inicia la animación cuando el 30% de la escena es visible
  });

  return (
    <>
     <div className="absolute inset-0 w-full h-full -z-1 ">
        <LottieAnimation animationData={BackgroundAnimation} loop={true} autoplay={true} />
      </div>
      <div
        ref={ref} // Ref necesario para detectar la visibilidad
        className="h-screen w-screen flex flex-col items-center justify-center"
      >
        {/* Animación de la imagen */}
        <motion.div
          className="m-10 md:w-96"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} // Anima solo si está en vista
          transition={{ duration: 1 }}
        >
          <img src={image2} alt="Imagen" />
        </motion.div>

        {/* Animación del texto */}
        <motion.div
          className="w-72"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}} // Anima solo si está en vista
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="text-white text-center text-xxl carattere-text">
            Exercitation do laborum non cupidatat elit officia culpa voluptate ea.
            Incididunt non aliqua aliqua sunt.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Scene3;