import { FC } from "react";
import Foto from "../assets/images/fotoP.jpg";

const InfoPasaporte: FC = () => {
  return (
    <div className="border-4 m-5 rounded-xl bg-gradient-to-r from-blue-50 via-green-50 to-yellow-50 md:w-2/3 md:m-auto md:mt-10 md:mb-10 h-auto">
      <div>
        <h2 className="text-center mt-5 crimson-text text-3xl mb-2">
          PASAPORTE DE BODA
        </h2>
      </div>
      <div className="border-b-4 border-dotted"></div>

      <div className="p-5 rounded-xl grid grid-cols-1 md:grid-cols-[auto_auto_1fr] gap-4">
        {/* Foto */}
        <div className="border-2 p-2 rounded-xl m-auto">
          <img src={Foto} alt="foto" className="rounded-xl" />
        </div>

        {/* Línea separadora */}
        <div className="border-r-4 border-dotted "></div>

        {/* Datos pasaporte */}
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-3 border-b-4 border-dotted  mb-5">
            <div>
              <p className="montserrat-text text-sm">TIPO</p>
              <p className="crimson-text text-xl mb-0">M</p>
            </div>
            <div>
              <p className="montserrat-text text-sm">CÓDIGO</p>
              <p className="crimson-text text-xl">PME</p>
            </div>
            <div>
              <p className="montserrat-text text-sm">PASAPORTE N°</p>
              <p className="crimson-text text-xl">23252021</p>
            </div>
          </div>

          <div>
            <p className="montserrat-text text-sm">NOMBRES</p>
            <p className="crimson-text text-xl mb-5">
              ENIER MONTES & MARIANA PINEDA
            </p>
          </div>
          <div>
            <p className="montserrat-text text-sm">FECHA</p>
            <p className="crimson-text text-xl mb-5">XX MARZO 2025</p>
          </div>
          <div>
            <p className="montserrat-text text-sm">HORA</p>
            <p className="crimson-text text-xl mb-5">XX:XX PM</p>
          </div>
          <div>
            <p className="montserrat-text text-sm">UBICACIÓN</p>
            <p className="crimson-text text-xl mb-5">PUERTO COLOMBIA</p>
          </div>
        </div>
      </div>

      <div className="border-b-4 border-dotted"></div>

      <div className="col-2 p-5">
        <p className="cousine-text break-all">
          {
            "M<<<<COL<<MEX<<<ENIER<<<<<MARIANA<<<<<<<<<20152025<<<<BODA<<<<<<<<<<<<<<<<"
          }
        </p>
      </div>
    </div>
  );
};

export default InfoPasaporte;
