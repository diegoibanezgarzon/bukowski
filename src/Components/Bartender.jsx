import React from "react";
import BartenderImg from "../assets/MaskGroup.png";

const Bartender = () => {
  return (
    <main className="h-screen my-12">
      <div class="grid grid-cols-5 gap-4 h-screen content-center items-center bg-gray-200">
        <div class="col-start-1 col-end-3 justify-self-end">
          <img src={BartenderImg} alt="cocktail" className="" />
        </div>
        <div class="col-start-3 col-end-6 pr-12">
          <h3 className="text-5xl text-center font-extrabold mb-12 text-black font-title">
            La coctelería es una mezcla perfecta de arte, ciencia y hospitalidad
          </h3>
          <span className="w-20 h-1 my-12 bg-black rounded-lg"></span>
          <p className="text-xl  text-center text-black font-body mt-12">
            La coctelería es un arte que combina la creatividad, la precisión y
            el conocimiento de ingredientes para crear deliciosas y cautivadoras
            bebidas. Desde los clásicos intemporales hasta las creaciones
            modernas y vanguardistas, la coctelería ofrece una amplia variedad
            de opciones para satisfacer los gustos de cualquier persona
          </p>
        </div>
      </div>
    </main>
  );
};

export default Bartender;
