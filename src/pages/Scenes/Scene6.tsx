import { FC, useState } from "react";
import { motion } from "framer-motion";
import LottieAnimation from "../../components/AnimacionLottie";
import BookCover from "../../assets/images/pasaporte.png"; // Imagen de la portada
import PassportUp from "../../assets/images/Pasaporte-Up.png"; // Imagen de la página 2
import PassportDown from "../../assets/images/Pasaporte-Down.png"; // Imagen de la página 3
//import BookOpeningAnimation from "../../assets/animations/book_opening.json"; // Animación Lottie (si la tienes)

const Scene6: FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el libro está abierto o cerrado

  const handleOpenBook = () => {
    setIsOpen(true);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center relative">
      {/* Animación de Lottie para abrir el libro */}
      {/* {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full -z-10"
        >
          <LottieAnimation
            animationData={BookOpeningAnimation}
            loop={false}
            autoplay={true}
          />
        </motion.div>
      )} */}

      {/* Portada del libro */}

      <div className="rounded-xl">
        <motion.div
          className="relative cursor-pointer"
          onClick={handleOpenBook}
          initial={{ rotateY: 0 }}
          animate={isOpen ? { rotateY: 180 } : {}}
          transition={{ duration: 1.5 }}
        >
          {/* Si el libro está abierto, no mostramos la portada */}
          {!isOpen && (
            <img
              src={BookCover}
              alt="Book Cover"
              className="w-96 h-100 shadow-lg rounded-r-xl pt-5 pb-5 "
            />
          )}
        </motion.div>
      </div>

      {/* Páginas internas del libro, solo visibles cuando el libro está abierto */}
      {isOpen && (
        <div className="bg-white rounded-xl">
          {/* Página 2 */}
          <div className="content-center">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="w-96 h-64 shadow-lg"
            >
              <img src={PassportUp} alt="Page 2" className="h-fill" />
            </motion.div>
          </div>

          {/* Página 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="w-96 h-64 shadow-lg"
          >
            <img src={PassportDown} alt="Page 3" />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Scene6;
