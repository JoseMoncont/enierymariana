import React from "react";
import PortadaPasaporte from "../components/Portada";
import LottieAnimation from "../components/AnimacionLottie";
import { useNavigate } from "react-router-dom";
import ImageGallery from "../components/Galeria";
import Avion from "../assets/animations/mapa1.json";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/pasaporte"); // Cambia '/ruta-deseada' por la ruta a la que quieras navegar
  };
  return (
    <div className="m-10 border-xl">
      <div>
        <p className="crimson-text ">EL VIAJE DE NUESTRAS VIDAS...</p>
      </div>
      <div>
        <LottieAnimation animationData={Avion} loop={true} autoplay={true} />
      </div>

      <p className="crimson-text ">comienza aquí</p>
      <button className="btn">VER</button>
    </div>
  );
};

export default Home;
