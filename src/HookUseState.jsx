import React, { useState } from "react";
import Layout from "./components/Layout";

// Componente principal: Usa la composición de componentes para construir la interfaz.
const App = () => {
  // Usamos el hook useState para crear una variable de estado
  // 'title' es el valor actual, 'setTitle' es la función para actualizarlo.
  const [title, setTitle] = useState("Título de la aplicación");
  // Creamos un estado para el contador con valor inicial de 0.
  const [count, setCount] = useState(0);
  // Creamos un estado para el texto del input con valor inicial vacío.
  const [inputValue, setInputValue] = useState("");
  // Creamos un estado para la visibilidad del menú con valor inicial 'false'.
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <Layout>
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Demostración de `useState`
        </h2>
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-center mt-8">{title}</h1>
          {/* Añadimos un botón que actualizará el estado al hacer clic */}
          <button
            onClick={() => setTitle("¡El título ha cambiado!")}
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Cambiar Título
          </button>
        </div>
        {/* Sección 1: Contador */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-medium">Contador</h3>
          <p className="text-4xl my-2">{count}</p>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            Incrementar
          </button>
        </div>
        {/* Sección 2: Texto de un Formulario */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-medium">Formulario Interactivo</h3>
          <input
            type="text"
            // El valor del input está controlado por el estado
            value={inputValue}
            // El estado se actualiza cada vez que el valor del input cambia
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Escribe algo aquí..."
            className="mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="mt-2">
            Texto en tiempo real:{" "}
            <span className="font-bold">{inputValue}</span>
          </p>
        </div>
        {/* Sección 3: Alternar Visibilidad */}
        <div className="text-center">
          <h3 className="text-xl font-medium">Alternar Visibilidad</h3>
          <button
            // Alternamos el valor del estado cada vez que se hace clic
            onClick={() => setIsMenuVisible(!isMenuVisible)}
            className="mt-2 px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
          >
            {isMenuVisible ? "Ocultar Menú" : "Mostrar Menú"}
          </button>
          {/* El div se renderiza condicionalmente si 'isMenuVisible' es true */}
          {isMenuVisible && (
            <div className="mt-4 p-4 bg-gray-200 rounded-lg">
              <p>¡Este menú ahora es visible!</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default App;
