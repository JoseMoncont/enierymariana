import { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LottieAnimation from "../../components/AnimacionLottie";
import mapa from "../../assets/icons/map.svg";
import BackgroundAnimation from "../../assets/animations/mapamundi.json";
import flor from "../../assets/animations/flores-v.json";
import flor2 from "../../assets/animations/flores-n.json";

const Scene9: FC = () => {
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
        className="h-screen w-screen flex flex-col items-center justify-center  content-center z-10"
      >
        <div className="absolute -bottom-5 -left-6 -translate-y-1/2 w-48 z-20 md:left-1/4 md:-bottom-36">
          <motion.div
            className="m-10 md:w-48 "
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

        <div className="border rounded-t-full px-10 content-center  py-10 ">
          <motion.div
            className="m-10 md:w-96 "
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
                <img src={mapa} alt="" className="w-16 " />
              </div>
            </div>

            <p className="text-white luxurious text-6xl mt-5 text-center">
              Ubicación
            </p>
          </motion.div>
          <motion.div
            className=" items-center content-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}} // Anima solo si está en vista
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="text-white text-center text-xxl fuente-principal ">
              Casa Andrea
            </p>
            <p className="text-white text-xxl  text-center fuente-principal">
              Puerto Colombia, ATL{" "}
            </p>
            <div className="flex justify-center rounded-lg  mt-5">
              <button
                className="border w-36 text-white text-center poppins-regular text-sm  p-3"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Casandrea+Country+Club/@11.0393794,-74.9028777,18.21z/data=!4m14!1m7!3m6!1s0x8ef42bccc2a945a5:0x33b36f31f3995106!2sCasandrea+Country+Club!8m2!3d11.0388873!4d-74.9031973!16s%2Fg%2F11bwqnn727!3m5!1s0x8ef42bccc2a945a5:0x33b36f31f3995106!8m2!3d11.0388873!4d-74.9031973!16s%2Fg%2F11bwqnn727?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
                  )
                }
              >
                VER UBICACIÓN
              </button>
            </div>
          </motion.div>
        </div>

        <div className="h-10 md:h-0"></div>
      </div>
    </>
  );
};

export default Scene9;
