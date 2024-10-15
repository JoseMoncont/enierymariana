import React from "react";
import img1 from "../assets/images/salud.png";
import img2 from "../assets/images/boda.png";
import img3 from "../assets/images/cena.png";

const EventTimeline = () => {
  const events = [
    { title: "Recepción", time: "03:00 PM", image: img1 },
    { title: "Ceremonia", time: "04:00 PM", image: img2 },
    { title: "Cena/Fiesta", time: "07:00 PM", image: img3 },
  ];

  return (
    <div style={timelineContainer}>
      {events.map((event, index) => (
        <div key={index} style={timelineItem}>
          <img src={event.image} alt={event.title} style={imageStyle} />
          <div style={eventInfo}>
            <p className="text-white fuente-principal ">{event.title}</p>
            <p className="text-blue-200 poppins-regular text-lg">
              {event.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Estilos
const timelineContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "25px",
  marginTop: "20px",
};

const timelineItem: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  borderLeft: "2px solid #ccc",
  padding: "10px 20px",
  position: "relative",
};

const imageStyle: React.CSSProperties = {
  width: "40px", // Ajusta el tamaño de la imagen
  height: "40px",
  objectFit: "cover",
};

const eventInfo: React.CSSProperties = {
  textAlign: "left" as "left",
};

const titleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: "18px",
  fontFamily: "Poppins",
  fontWeight: "bold",
};

const timeStyle: React.CSSProperties = {
  margin: 0,
  color: "#888",
};

export default EventTimeline;
