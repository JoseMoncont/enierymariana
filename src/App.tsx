import React, { useState, useEffect } from "react";
import Preloader from "./components/PreLoader";
import Home from "./pages/Home";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleDOMContentLoaded = () => {
      setLoading(false); // Oculta el preloader cuando el DOM esté cargado
    };

    const handleLoad = () => {
      setLoading(false); // Oculta el preloader cuando todos los recursos estén cargados
    };

    // Escucha el evento DOMContentLoaded para cargar cuando el HTML esté listo
    document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

    // Escucha el evento load para cuando todos los recursos hayan cargado
    window.addEventListener("load", handleLoad);

    // Fallback para ocultar el preloader después de un tiempo (5 segundos)
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Cleanup listeners y timeout
    return () => {
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
       <Home></Home>
      )}
    </>
  );
};

export default App;
