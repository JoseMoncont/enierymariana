import React, { FC } from "react";
import { motion } from "framer-motion";

import image1 from "../assets/images/noimage.jpg";
import image2 from "../assets/images/noimage.jpg";
import image3 from "../assets/images/noimage.jpg";
import image4 from "../assets/images/noimage.jpg";
import image5 from "../assets/images/noimage.jpg";

// Imágenes estilo vintage (Puedes usar URLs o archivos locales)
const images = [
  {
    src: image1,
    alt: "Novios en la infancia",
    text: "Primer encuentro en la infancia",
  },
  {
    src: image2,
    alt: "Novios en adolescencia",
    text: "Crecieron juntos en la adolescencia",
  },
  { src: image3, alt: "Novios en viaje", text: "Su primer viaje juntos" },
  {
    src: image4,
    alt: "Novios en compromiso",
    text: "El día del compromiso",
  },
  {
    src: image5,
    alt: "Novios actuales",
    text: "Hoy, listos para el futuro",
  },
];

const ImageGallery = () => {
  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="image-card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: index * 0.3 }}
        >
          <img src={image.src} alt={image.alt} className="vintage-image" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 + 0.5 }}
            className="image-text"
          >
            {image.text}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGallery;
