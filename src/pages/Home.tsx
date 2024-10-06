import React from "react";
import { useNavigate } from "react-router-dom";
import Scene1 from "./Scenes/Scene1";
import Scene2 from "./Scenes/Scene2";
import Scene3 from "./Scenes/Scene3";
import Scene4 from "./Scenes/Scene4";
import Scene5 from "./Scenes/Scene5";
import Scene6 from "./Scenes/Scene6";

const Home: React.FC = () => {
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
        <Scene4></Scene4>
      </div>
      {/* Scene 5 */}
      {/* <div className="scroll-section">
        <Scene5></Scene5>
      </div> */}

      <div className="scroll-section">
        <Scene6></Scene6>
      </div>
    </div>
  );
};

export default Home;
