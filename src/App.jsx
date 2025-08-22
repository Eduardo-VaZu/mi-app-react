import React from "react";
import Layout from "./components/Layout";
import Tarjeta from "./components/Tarjeta";
import datosTarjetas from "./components/data";

// Componente principal: Usa la composición de componentes para construir la interfaz.
const App = () => {
  const tarjetaFrontend = datosTarjetas.filter(
    (tarjeta) => tarjeta.category === "frontend"
  );

  const tarjetaBackend = datosTarjetas.find(
    (tarjeta) => tarjeta.titulo === "Tarjeta de Node.js"
  );
  return (
    <Layout>
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-center my-8">
          Ejemplo de `.map()` con los datos
        </h2>
        {datosTarjetas.map((tarjeta) => (
          <Tarjeta
            key={tarjeta.id}
            titulo={tarjeta.titulo}
            contenido={tarjeta.contenido}
          />
        ))}

        <h2 className="text-3xl font-bold text-center my-8">
          Ejemplo de `.filter() & .map()` con los tarjetaFrontend
        </h2>
        {tarjetaFrontend.map((tarjeta) => (
          <Tarjeta
            key={tarjeta.id}
            titulo={tarjeta.titulo}
            contenido={tarjeta.contenido}
          />
        ))}

        <h2 className="text-3xl font-bold text-center my-8">
          Ejemplo de `.find()` con los tarjetaBackend
        </h2>
        {tarjetaBackend ? (
          <Tarjeta
            key={tarjetaBackend.id}
            titulo={tarjetaBackend.titulo}
            contenido={tarjetaBackend.contenido}
          />
        ) : (
          <p className="text-center text-gray-600">
            No se encontró la tarjeta.
          </p>
        )}

        <Tarjeta
          titulo="Mi segunda tarjeta"
          contenido="Este es el contenido de la segunda tarjeta."
        />
      </div>
    </Layout>
  );
};

export default App;
