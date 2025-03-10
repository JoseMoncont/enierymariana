import React from "react";
import Scene1 from "./Scenes/Scene1";
import Scene2 from "./Scenes/Scene2";
import Scene3 from "./Scenes/Scene3";
import Scene5 from "./Scenes/Scene5";
import Scene6 from "./Scenes/Scene6";
import Scene7 from "./Scenes/Scene7";
import Scene8 from "./Scenes/Scene8";
import Scene9 from "./Scenes/Scene9";
import Scene10 from "./Scenes/Scene10";
import Scene11 from "./Scenes/Scene11";
import Scene12 from "./Scenes/Scene12";
import Scene4P from "./Scenes/Scene4-p";
import Scene13 from "./Scenes/Scene13";


const Participacion: React.FC = () => {
  return (
    <div className="scroll-container fondo-oscuro ">
    

      {/* Scene 1 */}
      <div className="scroll-section">
        <Scene1></Scene1>
      </div>
      {/* Scene 2 */}
      <div className="scroll-section">
        <Scene2></Scene2>
      </div>
      {/* Scene 3 */}
      <div className="scroll-section">
        <Scene3></Scene3>
      </div>
      {/* Scene 4 */}
      <div className="scroll-section">
        <Scene4P></Scene4P>
      </div>

      <div className="scroll-section">
        <Scene13></Scene13>
      </div>


      {/* Scene 5 */}
      {/* <div className="scroll-section">
        <Scene5></Scene5>
      </div> */}

      <div className="scroll-section">
        <Scene6></Scene6>
      </div>
     
    

      <div className="scroll-section">
        <Scene11></Scene11>
      </div>
      {/* <div className="scroll-section">
        <Scene12></Scene12>
      </div> */}
    </div>
  );
};

export default Participacion;
