import { FC, useState } from "react";
import { motion } from "framer-motion";
import BookCover from "../../assets/images/pasaporte.png"; // Imagen de la portada
import PassportUp from "../../assets/images/Pasaporte-Up.png"; // Imagen de la página 2 (arriba)
import PassportDown from "../../assets/images/Pasaporte-Down.png"; // Imagen de la página 3 (debajo)
import LottieAnimation from "../../components/AnimacionLottie";
import BackgroundAnimation from "../../assets/animations/mapamundi.json";

const Scene5: FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el pasaporte está abierto o cerrado

  // Alternar entre abrir y cerrar el pasaporte
  const handleToggleBook = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center relative">
      <div className="absolute inset-0 w-full h-full -z-1 ">
        <LottieAnimation
          animationData={BackgroundAnimation}
          loop={true}
          autoplay={true}
        />
      </div>
      {/* Contenedor del pasaporte */}
      <div className="relative cursor-pointer" onClick={handleToggleBook}>
        <div
          className={`relative w-96 h-auto shadow-lg rounded-r-xl border ${
            isOpen ? "rounded-xl bg-white" : "fondo-oscuro"
          }`}
        >
          {/* Portada del pasaporte */}
          <motion.div
            className="relative inset-0"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: isOpen ? -180 : 0 }}
            transition={{ duration: 1 }}
            style={{
              transformOrigin: "left center",
              backfaceVisibility: "hidden",
            }}
          >
            <img src={BookCover} alt="Book Cover" className="w-full h-auto" />
            <p className="text-sm text-center text-white mt-3 mb-3">
              Presione para abrir
            </p>
          </motion.div>

          {/* Páginas internas del pasaporte */}
          {isOpen && (
            <motion.div
              className="absolute inset-0 w-full h-full"
              initial={{ rotateY: 180 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 1 }}
              style={{
                transformOrigin: "left center",
                backfaceVisibility: "hidden",
              }}
            >
              {/* Página 2 (parte superior) */}
              <img
                src={PassportUp}
                alt="Page 2"
                className="absolute w-full top-0 left-0 shadow-lg rounded-t-xl bg-white"
              />

              {/* Página 3 (parte inferior) */}
              <img
                src={PassportDown}
                alt="Page 3"
                className="absolute w-full bottom-0 left-0 shadow-lg rounded-b-xl bg-white"
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Scene5;
