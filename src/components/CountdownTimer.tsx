import { useState, useEffect } from "react";
import LottieAnimation from "../components/AnimacionLottie";
import Flower from "../assets/animations/flores-h.json"; // Asegúrate de tener la animación JSON en tus assets

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-03-14T16:00:00"); // Fecha del evento
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="text-center content-center items-center relative">
      <h2 className="text-2xl font-bold mb-4 carattere-text text-white text-center">
        Cuenta regresiva para el gran día
      </h2>

      {/* Recuadro de la cuenta regresiva */}
      <div className="flex justify-center items-center space-x-4 text-3xl font-bold border p-3 relative mb-16 pb-10 ">
        <div className="flex flex-col items-center">
          <span className="text-4xl crimson-text text-white">
            {timeLeft.days}
          </span>
          <span className="text-sm crimson-text uppercase text-yellow-100">
            Días
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl crimson-text text-white">
            {timeLeft.hours}
          </span>
          <span className="text-sm crimson-text uppercase text-yellow-100">
            Horas
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl crimson-text text-white">
            {timeLeft.minutes}
          </span>
          <span className="text-sm crimson-text uppercase text-yellow-100">
            Mins
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl crimson-text text-white">
            {timeLeft.seconds}
          </span>
          <span className="text-sm crimson-text uppercase text-yellow-100">
            Segs
          </span>
        </div>
      </div>

      {/* Animación Lottie superpuesta en la parte baja */}
      <div className="absolute bottom-0 left-0 right-0 flex ">
        <div className="h-1"></div>
        <LottieAnimation
          animationData={Flower}
          loop={true}
          autoplay={true}
        ></LottieAnimation>
      </div>
    </div>
  );
};

export default CountdownTimer;
