import { useEffect, useRef } from "react";
import SaveDate from "./pages/SaveDate";
import cancion from "./assets/audio/audio1.mp3";
import Home from "./pages/Home";

const App = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = true;
      audio
        .play()
        .then(() => {
          audio.muted = false;
        })
        .catch((error) => {
          console.error("Error al reproducir el audio:", error);
        });
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} src={cancion} loop autoPlay />
      <SaveDate></SaveDate>
    </>
  );
};

export default App;
