import { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image1 from "../../assets/images/image1.png";
import LottieAnimation from "../../components/AnimacionLottie";
import BackgroundAnimation from "../../assets/animations/mapamundi.json";
import DressCode from "../../components/DressCode";
import flor from "../../assets/animations/flores-n.json";
import img from "../../assets/images/clothes.png";
const Scene8: FC = () => {
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
          className=" md:w-96"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} // Anima solo si está en vista
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center">
            <div className="w-10 flex justify-center ">
              <LottieAnimation
                animationData={flor}
                loop={false}
                autoplay={true}
              />
            </div>
            <div className="flex justify-center relative rounded-full mb-3">
              {" "}
              <img src={img} alt="" className="w-16 " />
            </div>
          </div>

          <p className="text-white luxurious text-5xl mt-5 text-center ">
            Código de Vestimenta
          </p>
        </motion.div>
        <motion.div
          className="w-80"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}} // Anima solo si está en vista
          transition={{ delay: 0.5, duration: 1 }}
        >
          <DressCode></DressCode>
        </motion.div>

        <div className="h-10 md:h-0"></div>
      </div>
    </>
  );
};

export default Scene8;
