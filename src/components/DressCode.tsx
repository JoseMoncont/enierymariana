import React from "react";
import img1 from "../assets/images/man.png";
import img2 from "../assets/images/woman.png";

const DressCode = () => {
  const primaryColor = "#1D2739"; // PRIMARY
  const secondaryColor = "#597B9C"; // SECONDARY
  const lightColor = "#8EB5DD"; // LIGHT
  const white = "#FFFFFF"

  return (
    <div className="m-5 p-5 rounded-lg text-center">
      {/* <p className="text-base text-gray-600 mb-4">
        Para esta ocasión especial, les pedimos que sigan el siguiente código de
        vestimenta:
      </p> */}
      <ul className="list-none mb-4 border border-dashed p-3 rounded-r-full rounded-l-full">
        <li className="text-lg text-gray-100 flex fuente-principal justify-center">
          <img src={img2} alt="" className="h-6 w-6 me-5" />
          Vestido largo
        </li>
        <li className="text-lg text-gray-100 flex fuente-principal justify-center mt-2">
          <img src={img1} alt="" className="h-6 w-6 me-5" /> Traje formal
        </li>
      </ul>
      <p className="text-sm text-gray-300 mb-4 poppins-regular">
        Con cariño, les pedimos que eviten usar los colores de la boda en su
        vestimenta:
      </p>
      <div className="flex justify-center gap-5 mt-5">
       
        <div
          className="w-12 h-16 rounded-full flex items-center justify-center "
          style={{ backgroundColor: secondaryColor }}
        >
          <p className="text-white font-bold text-center"></p>
        </div>
        <div
          className="w-12 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: lightColor }}
        >
          <p className="text-white font-bold text-center"></p>
        </div>
        <div
          className="w-12 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: white }}
        >
          <p className="text-white font-bold text-center"></p>
        </div>
      </div>
      <p className="text-base text-gray-200 mt-4 poppins-regular">
        ¡Esperamos verlos en sus mejores galas, con colores que resalten este
        día tan especial!
      </p>
    </div>
  );
};

export default DressCode;
