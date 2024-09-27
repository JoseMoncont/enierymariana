import React from "react";
import PortadaPasaporte from "../components/Portada";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/pasaporte"); // Cambia '/ruta-deseada' por la ruta a la que quieras navegar
  };
  return (
    <div>
      <PortadaPasaporte></PortadaPasaporte>
    </div>
  );
};

export default Home;
