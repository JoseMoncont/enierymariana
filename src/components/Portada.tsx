import Title from "../assets/images/pasaporte.png";
import LogoChip from "../assets/images/chip.svg";
import { useNavigate } from "react-router-dom";

const PortadaPasaporte: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/pasaporte"); // Cambia '/ruta-deseada' por la ruta a la que quieras navegar
  };

  return (
    <div className=" h-screen w-screen flex flex-col items-center justify-center">
      <img src={Title} alt="Imagen 1" className="w-90 max-w-sm object-cover" />
      {/* <img src={LogoChip} alt="" className="w-10 mt-3" /> */}
      <button
        className="text-white font-bold py-2 px-4  border mt-12 "
        onClick={handleClick}
      >
        VER INVITACIÓN
      </button>
    </div>
  );
};

export default PortadaPasaporte;
