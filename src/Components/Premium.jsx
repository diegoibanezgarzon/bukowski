import React from "react";

const Premium = () => {
  return (
    <main class="relative h-screen overflow-hidden bg-white">
      <header class="z-30 flex items-center w-full h-8">
        <div class="container flex items-center justify-between px-6 mx-auto"></div>
      </header>
      <div class="relative z-20 flex items-center overflow-hidden bg-white">
        <div class="container relative flex px-6 py-6 mx-auto">
          <div class="relative pt-20 z-20 flex flex-col sm:w-2/3 lg:w-1/2">
            <h1 class="flex flex-col text-5xl font-extrabold leading-none text-black font-title">
              Cocteles premium
            </h1>
            <span class="w-20 h-1 my-12 bg-black rounded-lg"></span>
            <p class="text-xl pr-36 text-justify text-black font-body">
              Nuestro equipo de expertos en mixología ha seleccionado
              cuidadosamente cada receta para asegurarnos de ofrecerte los
              mejores sabores y combinaciones. Desde clásicos como el Martini y
              el Manhattan, hasta creaciones modernas con ingredientes exóticos,
              aquí encontrarás todo lo que necesitas para preparar deliciosos
              cocteles en casa.
            </p>
            
          </div>
          <div class="relative hidden sm:block sm:w-1/3 lg:w-1/2">
            <img
              src="https://i.postimg.cc/Cxz7N1r5/COCTEL-1.png"
              class="max-w-xs m-auto md:max-w-sm"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Premium;
