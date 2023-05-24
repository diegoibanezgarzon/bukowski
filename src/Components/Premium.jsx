import React from "react";
import cocktailPremium from "../assets/cocktail-01.png";

const Premium = () => {
  return (
    <main className=" h-screen">
      <div class="grid grid-cols-2 gap-4 h-screen content-center items-center">
        <div class="...">
          <img src={cocktailPremium} alt="cocktail" className="" />
        </div>
        <div class="...">
          <h3 className="text-5xl font-extrabold mb-12 text-black font-title">
            ¿Eres coctelero?
          </h3>
          <span className="w-20 h-1 my-12 bg-black rounded-lg"></span>
          <p className="text-xl pr-10 text-justify text-black font-body mt-12">
            Un buen coctelero no solo domina las técnicas de mezcla y vertido,
            sino que también comprende la importancia de equilibrar los sabores
            y las texturas. Juega con ingredientes frescos, jugos cítricos,
            jarabes, licores y destilados, combinándolos de manera armoniosa
            para crear un equilibrio perfecto de dulzura, acidez y amargura.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Premium;
