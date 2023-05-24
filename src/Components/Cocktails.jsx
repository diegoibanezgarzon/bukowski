import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const Cocktails = () => {
  return (
    <main className=" h-screen">
      <div class=" h-screen grid grid-cols-3">
        <div class=" bg-slate-500 row-start-1 row-end-3">
          <img src={img1} alt="cocktail"></img>
        </div>
        <div class="bg-cyan-500">
          <img className=" h-full" src={img2} alt="cocktail"></img>
        </div>
        <div class=" bg-red-500 col-start-3 row-start-1 row-end-3">
          <img src={img3} alt="cocktail"></img>
        </div>
        <div class=" bg-lime-500">
          <img className=" h-full" src={img4} alt="cocktail"></img>
        </div>
      </div>
    </main>
  );
};

export default Cocktails;
