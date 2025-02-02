import { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LottieAnimation from "../../components/AnimacionLottie";
import BackgroundAnimation from "../../assets/animations/mapamundi.json";
import image1 from "../../assets/images/qr-asistencia.png"; // Opcional: Imagen del "código QR" o logo

const Scene12: FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+525625712319";
    const message = "Hola Mariana, me gustaria confirmar la asistencia a tu boda";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  const handleWhatsAppClick2 = () => {
    const phoneNumber = "+573104929287";
    const message = "Hola Enier, me gustaria confirmar la asistencia a tu boda";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
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
        <div className="relative  max-w-md bg-white w-3/4 rounded-xl shadow-lg overflow-hidden">
          {" "}
          <motion.div
            className=""
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}} // Anima solo si está en vista
            transition={{ delay: 0.3, duration: 1 }}
          >
            {/* Parte superior del pase */}
            <div className="bg-orange-200 p-4 text-center">
              <h1 className="text-2xl font-bold uppercase fuente-principal">
                Pase de Abordar
              </h1>
              <p className="text-sm roboto-mono">Invitación Especial</p>
            </div>

            {/* Detalles del vuelo / Evento */}
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="text-gray-600 text-sm">Vuelo</p>
                  <p className="text-lg font-semibold roboto-mono">BODA E&M</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Fecha</p>
                  <p className="text-lg font-semibold roboto-mono">
                    15/03/2025
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-gray-600 text-sm">Hora</p>
                  <p className="text-lg font-semibold roboto-mono">4:00 PM</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Puerta</p>
                  <p className="text-lg font-semibold roboto-mono">C</p>
                </div>
              </div>

              <div className="border-t-2 border-dashed border-gray-300">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-gray-600 text-sm">Destino</p>
                    <p className="text-lg font-semibold roboto-mono">
                      CASA ANDREA
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">-</p>
                    <p className="text-lg font-semibold roboto-mono">PTO COL</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                {/* Aquí podrías agregar una imagen de código QR */}
                <img src={image1} alt="QR Code" className="w-28 h-28" />
              </div>

              {/* Confirmar Asistencia */}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative  max-w-md bg-white w-3/4 rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} // Anima solo si está en vista
          transition={{ delay: 0.3, duration: 1 }}
        >
          <div className="border-t-2 border-gray-800 border-dashed">
            {" "}
            <motion.div
              className=" justify-center p-4 "
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}} // Anima solo si está en vista
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <button
                onClick={handleWhatsAppClick}
                className="btn btn-primary text-xs roboto-mono bg-orange-200 rounded-lg font-bold py-2 px-4 w-full"
              >
                CONFIRMAR ASISTENCIA CON MARIANA
              </button>
              <button
                onClick={handleWhatsAppClick2}
                className="btn btn-primary text-xs roboto-mono bg-orange-200 rounded-lg font-bold py-2 px-4 w-full mt-2"
              >
                CONFIRMAR ASISTENCIA CON ENIER
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Scene12;
