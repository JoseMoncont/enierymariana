import { motion } from "framer-motion";
import { FC } from "react";
import LottieAnimation from "../../../components/AnimacionLottie";
import Animacion from "../../..//assets/animations/sd.json";
import { useInView } from "react-intersection-observer";

const SceneSTD1: FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.01,
  });
  return (
    <>
      <div
        ref={ref}
        className="h-screen w-screen color3  flex items-center justify-center relative overflow-hidden"
      >
        <motion.div
          className="w-full h-full max-w-[1080px] max-h-[1920px] aspect-square"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <LottieAnimation
            animationData={Animacion}
            loop={true}
            autoplay={true}
          />
        </motion.div>
      </div>
    </>
  );
};

export default SceneSTD1;
