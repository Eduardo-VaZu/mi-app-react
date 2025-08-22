import React from "react";
import PropTypes from "prop-types";

const defaultContent = (
  <div className="container max-auto bg-yellow-50 p-4 text-center text-yellow-800 rounded-lg">
    <p>Contenido predeterminado </p>
  </div>
);

const Layout = ({ children = defaultContent }) => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* <HelloWorld appTitle={"Primera app React"} /> */}
      <header className="p-6 bg-indigo-600 text-white text-center rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-extrabold">Mi App con Composición</h1>
      </header>
      <main className="container mx-auto">{children}</main>
      <footer className="p-4 text-center mt-8 text-gray-500">
        &copy; {new Date().getFullYear()} Mi App. Todos los derechos reservados.
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
