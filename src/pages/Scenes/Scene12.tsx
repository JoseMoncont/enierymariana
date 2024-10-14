import { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LottieAnimation from "../../components/AnimacionLottie";
import BackgroundAnimation from "../../assets/animations/mapamundi.json";
import image1 from "../../assets/images/qr.png"; // Opcional: Imagen del "código QR" o logo

const Scene12: FC = () => {
  // Detecta si el componente está en el viewport
  const { ref, inView } = useInView({
    triggerOnce: false, // La animación ocurrirá solo la primera vez que aparezca
    threshold: 0.3, // Inicia la animación cuando el 30% de la escena sea visible
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
        {/* Pase de abordar - Tarjeta */}
        <motion.div
          className="relative  max-w-md bg-white w-3/4 rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} // Anima solo si está en vista
          transition={{ delay: 0.3, duration: 1 }}
        >
          {/* Parte superior del pase */}
          <div className="bg-indigo-600 p-4 text-white text-center">
            <h1 className="text-2xl font-bold">Pase de Abordar</h1>
            <p className="text-sm">Invitación Especial</p>
          </div>

          {/* Detalles del vuelo / Evento */}
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="text-gray-600 text-sm">Vuelo</p>
                <p className="text-lg font-semibold">BODA 1234</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Fecha</p>
                <p className="text-lg font-semibold">14 Octubre 2024</p>
              </div>
            </div>

            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-gray-600 text-sm">Hora</p>
                <p className="text-lg font-semibold">3:00 PM</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Puerta</p>
                <p className="text-lg font-semibold">A12</p>
              </div>
            </div>

            <div className="flex justify-center">
              {/* Aquí podrías agregar una imagen de código QR */}
              <img src={image1} alt="QR Code" className="w-24 h-24" />
            </div>

            {/* Confirmar Asistencia */}
            <motion.div
              className="flex justify-center mt-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}} // Anima solo si está en vista
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <button className="btn btn-primary bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-full">
                CONFIRMAR ASISTENCIA
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Scene12;
