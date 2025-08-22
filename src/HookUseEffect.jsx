import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Tarjeta from "./components/Tarjeta";
import datosTarjetas from "./components/data";

// Componente principal: Usa la composición de componentes para construir la interfaz.
const App = () => {
  // Carga de datos con useEffect
  // Estado para las tarjetas que se cargarán de forma asíncrona.
  const [tarjetas, setTarjetas] = useState([]);
  // Estado para mostrar un mensaje de carga.
  const [isLoading, setIsLoading] = useState(true);

  // El hook useEffect se ejecuta después de que el componente se renderiza.
  // El arreglo vacío [] como segundo argumento hace que se ejecute solo una vez.
  useEffect(() => {
    // Simulamos una llamada a una API con un retraso de 1 segundo.
    setTimeout(() => {
      setTarjetas(datosTarjetas); // Actualizamos el estado con los datos.
      setIsLoading(false); // Desactivamos el estado de carga.
    }, 1000);
  }, []);

  return (
    <Layout>
      {/* Sección de Tarjetas ahora controlada por useEffect */}
      <h2 className="text-3xl font-bold text-center my-8">
        Ejemplo de `.map()` con los datos
      </h2>
      {/* Renderizado condicional: si está cargando, muestra un mensaje, de lo contrario, muestra las tarjetas */}
      {isLoading ? (
        <p className="text-center text-gray-600">Cargando tarjetas...</p>
      ) : (
        tarjetas.map((tarjeta) => (
          <Tarjeta
            key={tarjeta.id}
            titulo={tarjeta.titulo}
            contenido={tarjeta.contenido}
          />
        ))
      )}
    </Layout>
  );
};

export default App;
