import React, { useEffect } from "react";

const BackgroundMusic = () => {
  useEffect(() => {
    const audioElement = document.getElementById(
      "background-music"
    ) as HTMLAudioElement;

    // Verificar si el elemento existe antes de intentar reproducirlo
    if (audioElement) {
      audioElement.volume = 0.2; // Ajusta el volumen
      audioElement.play().catch((error) => {
        console.log(
          "Reproducción automática bloqueada por el navegador.",
          error
        );
      });
    }
  }, []);

  return (
    <div className="">
      <audio id="background-music" loop>
        <source src="../assets/song/perfect.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
};

export default BackgroundMusic;
