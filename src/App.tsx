import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SaveDate from "./pages/SaveDate";
import Home from "./pages/Home"; // Nueva página
import cancion from "./assets/audio/audio1.mp3";

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
    <Router>
      <audio ref={audioRef} src={cancion} loop autoPlay />
      <Routes>
        <Route path="/" element={<SaveDate />} />
        <Route path="/confirmacion" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
