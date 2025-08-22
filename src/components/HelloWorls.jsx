import React from "react";
import PropTypes from "prop-types";

const HelloWorld = ({ appTitle }) => {
  return (
    <div className="bg-gray-100">
      <Header title={appTitle} id={123} />
      <div className="pb-3">
        <h1 className="text-3xl font-bold text-center mt-8">Hola Mundo</h1>
        <p className="text-center text-gray-600 mt-2">¡Qué tal!</p>
      </div>
    </div>
  );
};

const Header = ({ title, id }) => {
  const subtitle = "Esta es la mejor aplicación del mundo";

  return (
    <header className="bg-indigo-600 text-white text-center rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold mb-2">
        Mi Primer Componente de React
      </h1>
      <h2 className="text-xl italic">
        {title} {id}
      </h2>
      <p className="m-4">{subtitle}</p>
    </header>
  );
};

HelloWorld.propTypes = {
  appTitle: PropTypes.string.isRequired,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default HelloWorld;
