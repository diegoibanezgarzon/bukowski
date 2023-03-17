import React from "react";
import styles from "../style";

const Heroa = () => {
  return (
    <div class="relative h-screen overflow-hidden bg-indigo-900">
      <img
        src="https://i.postimg.cc/2yJ33RjC/PORTADA.png"
        class="absolute object-cover w-full h-full"
      />
      <div class="absolute inset-0 bg-black opacity-25"></div>

      <div class="container relative z-10 flex items-center px-6 mx-auto md:px-12 ">
        <div class="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
          <h1 class="mt-20 text-6xl font-title font-bold leading-tight text-white sm:text-5xl">
            Descubre los mejores cocteles en un solo lugar
          </h1>
          <p class="mt-8 text-2 font-body font-regular leading-tight text-white sm:text-xl">
            Te apasiona el mundo de la coctelería, eres coctelero profesional o
            simplemente quieres aprender a preparar un Cosmopolitan… Ya has
            encontrado tu web de recetas de cócteles.
          </p>
          <a
            href="#"
            class="block px-6 py-2 font-body mt-10 text-lg font-bold text-gray-800 bg-white rounded-lg hover:bg-gray-100"
          >
            Explorar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Heroa;