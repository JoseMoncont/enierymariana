import { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import pasaporte1 from "../../assets/images/pasaporte.png";
import { useNavigate } from "react-router-dom";
import LottieAnimation from "../../components/AnimacionLottie";
import BackgroundAnimation from "../../assets/animations/mapamundi.json";

const Scene5: FC = () => {
  const navigate = useNavigate();
  // Detecta si el componente está en el viewport
  const { ref, inView } = useInView({
    triggerOnce: false, // Para que la animación ocurra solo la primera vez que aparece
    threshold: 0.3, // Inicia la animación cuando el 30% de la escena es visible
  });

  const handleClick = () => {
    navigate("/pasaporte");
  };
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
        {/* Animación de la imagen */}
        <motion.div
          className="m-10 md:w-96"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} // Anima solo si está en vista
          transition={{ duration: 1 }}
        >
          <img src={pasaporte1} alt="Imagen" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} // Anima solo si está en vista
          transition={{ duration: 1 }}
        >
          <button
            className="text-white font-bold py-2 px-4  border  mt-10"
            onClick={handleClick}
          >
            VER INVITACIÓN
          </button>
        </motion.div>
        <div className="h-10 md:h-0"></div>
      </div>
    </>
  );
};

export default Scene5;
