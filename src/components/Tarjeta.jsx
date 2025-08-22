import React from "react";
import PropTypes from "prop-types";

const Tarjeta = ({
  titulo = "Título por defecto",
  contenido = "Contenido por defecto de la tarjeta.",
  imageUrl = "https://placehold.co/400x200/png",
}) => {
  return (
        <div className="bg-sky-300 rounded-full flex flex-row items-center sm:flex-row sm:items-center gap-3 sm:gap-4">
          <img className="size-24 h-32 sm:size-28 sm:h-32" src={imageUrl} alt={titulo} />
          <div className="grow">
            <div>
              <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                {titulo}
              </h3>
              <p className="mt-1 text-xs uppercase text-gray-500 dark:text-neutral-500">
                {contenido}
              </p>
            </div>
          </div>
        </div>
  );
};

Tarjeta.propTypes = {
  titulo: PropTypes.string,
  contenido: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Tarjeta;
