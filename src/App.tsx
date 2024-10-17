import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";


const App: React.FC = () => {
  return (
    <Router>


      <Routes>
        <Route path="/" element={<Home />} />

        {/* Puedes agregar más rutas aquí */}
      </Routes>
    </Router>
  );
};

export default App;
