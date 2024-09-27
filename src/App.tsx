import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Historia from "./pages/Historia";
import Pasabordo from "./pages/Pasabordo";
import Pasaporte from "./pages/Pasaporte";

const App: React.FC = () => {
  return (
    <Router>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/pasabordo" element={<Pasabordo />} />
        <Route path="/pasaporte" element={<Pasaporte />} />
        {/* Puedes agregar más rutas aquí */}
      </Routes>
    </Router>
  );
};

export default App;
