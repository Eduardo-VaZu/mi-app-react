import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Tarjeta from "./components/Tarjeta";
import axios from "axios";

const App = () => {
  // Sección 4: Carga de datos con useEffect y Axios
  const [tarjetas, setTarjetas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Nuevo estado para manejar errores

  // El hook useEffect se ejecuta después de que el componente se renderiza.
  useEffect(() => {
    const fetchTarjetas = async () => {
      try {
        // Hacemos una llamada a la API de Dragon Ball para obtener datos de personajes
        const response = await axios.get(
          "https://dragonball-api.com/api/characters"
        );
        
        // Mapeamos los datos de la API para que coincidan con las props de nuestro componente Tarjeta
        const datosMapeados = response.data.items.map((character) => ({
          id: character.id,
          titulo: character.name,
          contenido: character.race,
          imageUrl: character.image,
        }));

        setTarjetas(datosMapeados);
        setIsLoading(false);
      } catch (err) {
        setError("Hubo un error al cargar los datos.");
        setIsLoading(false);
        console.error(err);
      }
    };

    fetchTarjetas();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return (
        <p className="text-center text-gray-600">Cargando personajes...</p>
      );
    }

    if (error) {
      return <p className="text-center text-red-500 font-bold">{error}</p>;
    }

    return tarjetas.map((tarjeta) => (
      <Tarjeta
        key={tarjeta.id}
        titulo={tarjeta.titulo}
        contenido={tarjeta.contenido}
        imageUrl={tarjeta.imageUrl}
      />
    ));
  };

  return (
    <Layout>
      <h2 className="text-3xl font-bold text-center my-8">
        Personajes de Dragon Ball
      </h2>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {renderContent()}
        </div>
      </div>
    </Layout>
  );
};

export default App;
