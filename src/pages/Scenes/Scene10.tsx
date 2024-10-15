import { FC, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LottieAnimation from "../../components/AnimacionLottie";
import BackgroundAnimation from "../../assets/animations/mapamundi.json";
import flor from "../../assets/animations/flores-h.json";
import gift from "../../assets/icons/regalo.svg";
import flor2 from "../../assets/animations/flores-v.json";

const Scene10: FC = () => {
  // Detecta si el componente está en el viewport

  const { ref, inView } = useInView({
    triggerOnce: false, // Para que la animación ocurra solo la primera vez que aparece
    threshold: 0.3, // Inicia la animación cuando el 30% de la escena es visible
  });

  const [isFlipped, setIsFlipped] = useState(false);

  // Alternar entre el frente y la parte de atrás de la tarjeta
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute inset-0 w-full h-full -z-1 ">
        <LottieAnimation
          animationData={BackgroundAnimation}
          loop={true}
          autoplay={true}
        />
      </div>
      {/* Contenedor de la tarjeta */}
      <div
        ref={ref} // Ref necesario para detectar la visibilidad
        className="relative w-72 cursor-pointer  border rounded-full   content-start pt-14   h-3/4"
        onClick={handleFlip}
      >
        <div className="absolute -bottom-14 -right-14 -translate-y-1/2 w-36 z-20">
          <motion.div
            className="m-10 md:w-32 "
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}} // Anima solo si está en vista
            transition={{ duration: 1 }}
          >
            {" "}
            <LottieAnimation
              animationData={flor2}
              loop={true}
              autoplay={true}
            />
          </motion.div>
        </div>
        {/* Parte frontal de la tarjeta */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} // Anima solo si está en vista
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center">
            <div className="absolute flex justify-center h-20 mt-6 z-10 ">
              <LottieAnimation
                animationData={flor}
                loop={true}
                autoplay={true}
              />
            </div>
            <div className="flex justify-center relative rounded-full mb-3">
              {" "}
              <img src={gift} alt="" className="w-16 " />
            </div>
          </div>

          <p className="text-white luxurious text-6xl mt-5 text-center">
            Regalos
          </p>
        </motion.div>

        <motion.div
          className="absolute w-full text-white  flex items-center  text-xl font-bold"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8 }}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="p-3">
            <p className="fuente-principal text-center mb-5 text-xl text-blue-200">
              Para aquellos que desean hacernos un regalo, lo más especial para
              nosotros sería contar con su presencia.
            </p>
            <p className="fuente-principal text-center text-lg">
              {" "}
              Sin embargo, si desean hacerlo, agradecemos su generosidad a
              través de aportes a nuestras cuentas bancarias.
            </p>
            <div className="text-center me-5 mt-5">
              <span className="material-symbols-outlined">360</span>
            </div>
          </div>
        </motion.div>

        {/* Parte trasera de la tarjeta */}
        <motion.div
          className="absolute w-full h-full  text-white shadow-lg  flex items-start pt-5 justify-center text-sm font-bold"
          initial={{ rotateY: -180 }}
          animate={{ rotateY: isFlipped ? 0 : -180 }}
          transition={{ duration: 0.8 }}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          <div className=" ">
            <div className="mb-3 bg-slate-400 rounded-lg p-2 w-64">
              <i className="fa fa-credit-card text-black"></i>
              <p className="crimson-text text-sm poppins-regular">
                NOMBRE DE BANCO
              </p>
              <p className="crimson-text text-sm poppins-regular">
                Tipo cuenta
              </p>
              <p className="crimson-text text-xl poppins-bold">012345678910</p>
              <p className="crimson-text text-sm poppins-regular">
                Enier Montes
              </p>
            </div>
            <div className="mb-3 bg-cyan-600 rounded-lg p-2 w-64">
              <i className="fa fa-credit-card text-black"></i>
              <p className="crimson-text text-sm poppins-regular">
                NOMBRE DE BANCO
              </p>
              <p className="crimson-text text-sm poppins-regular">
                Tipo cuenta
              </p>
              <p className="crimson-text text-xl poppins-bold">012345678910</p>
              <p className="crimson-text text-sm poppins-regular">Mariana</p>
            </div>
            <div className="text-center mt-5">
              {" "}
              <span className="material-symbols-outlined">360</span>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="h-10 md:h-0"></div>
    </div>
  );
};
export default Scene10;
