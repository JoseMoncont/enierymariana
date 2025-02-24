import { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LottieAnimation from "../../components/AnimacionLottie";
import BackgroundAnimation from "../../assets/animations/mapamundi.json";

const Scene13: FC = () => {
  // Detecta si el componente está en el viewport
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <>
      <div className="absolute inset-0 w-full h-full -z-1">
        <LottieAnimation animationData={BackgroundAnimation} loop={true} autoplay={true} />
      </div>
      
      <div ref={ref} className="h-screen w-screen flex flex-col items-center justify-center">
        
        {/* Animación de Pergamino Desenrollándose */}
        <motion.div
          className="w-80 bg-white p-6 rounded-lg shadow-lg text-center text-gray-900 overflow-hidden"
          initial={{ scaleY: 0, y: -100, opacity: 0 }}
          animate={inView ? { scaleY: 1, y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ originY: 0 }} // Desenrolla desde la parte superior
        >
          <p className="text-sm cormorant-garamond-medium">Querido(a)</p>
          <p className="text-3xl luxurious font-serif mb-4 gold-text-real gold-texture ">Iglesia Faro del Evangelio</p>
          <p className="text-sm leading-relaxed cormorant-garamond-medium">
            En este hermoso capítulo de nuestras vidas, nos honra compartir contigo la alegría de nuestra unión. Dios, en su infinito amor, ha guiado nuestros caminos hasta este día especial, y queremos hacerte partícipe de esta bendición.
          </p>
          <p className="mt-4 text-sm leading-relaxed cormorant-garamond-medium">
            Tu presencia en nuestra historia ha sido valiosa, y agradecemos tu cariño, apoyo y oraciones. Gracias por compartir con nosotros esta alegría.
          </p>
          <p className="mt-6 text-sm font-semibold cormorant-garamond-medium mb-2">Con todo nuestro cariño,</p>
          <p className="font-bold text-3xl luxurious">Enier & Mariana</p>
        </motion.div>
      </div>
    </>
  );
};

export default Scene13;
