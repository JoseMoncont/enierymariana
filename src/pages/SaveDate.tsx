import { FC } from "react";
import SceneSTD1 from "./Scenes/SaveTheDate/Scene1STD";
import SceneSTD2 from "./Scenes/SaveTheDate/Scene2STD";

const SaveDate: FC = () => {
  return (
    <>
      <div className="scroll-container">
        <div className="scroll-section">
          <SceneSTD1></SceneSTD1>
        </div>
        <div className="scroll-section">
            <SceneSTD2></SceneSTD2>
        </div>
      </div>
    </>
  );
};

export default SaveDate;
