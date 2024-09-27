import Title from "../assets/images/pasaporte.png";
import Background from "../assets/images/background.jpg";
import { useNavigate } from "react-router-dom";

const PortadaPasaporte: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/pasaporte"); // Cambia '/ruta-deseada' por la ruta a la que quieras navegar
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center space-y-4 p-4"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <img src={Title} alt="Imagen 1" className="w-80 max-w-sm object-cover" />

      <button
        className="text-white font-bold py-2 px-4 rounded border "
        onClick={handleClick}
      >
        VER INVITACIÓN
      </button>
    </div>
  );
};

export default PortadaPasaporte;
