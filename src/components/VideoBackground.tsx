import React, { FC } from "react";
import backgroundVideo from "../assets/videos/map.mp4";

const VideoBackground= () => {
  return (
    <div className="video-background-container">
      <video autoPlay loop muted className="video-background">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Historia de los Novios</h1>
        <p>Un viaje que comenzó hace muchos años...</p>
      </div>
    </div>
  );
};

export default VideoBackground;
