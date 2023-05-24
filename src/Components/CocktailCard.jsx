import React, { useState } from "react";
import Modal from "./Modal";

const Cocktailcard = ({ cocktail }) => {
  const [open, setOpen] = useState(false);

  const ingredients = [
    cocktail.strIngredient1,
    cocktail.strIngredient2,
    cocktail.strIngredient3,
    cocktail.strIngredient4,
    cocktail.strIngredient5,
    cocktail.strIngredient6,
    cocktail.strIngredient7,
    cocktail.strIngredient8,
    cocktail.strIngredient9,
    cocktail.strIngredient10,
    cocktail.strIngredient11,
    cocktail.strIngredient12,
    cocktail.strIngredient13,
    cocktail.strIngredient14,
    cocktail.strIngredient15,
  ];
  const stringIngredients = ingredients.filter((x) => x).join(" • ");
  console.log("Prueba", stringIngredients);

  return (
    <main className=" flex items-stretch Cocktailcard">
      <button
        className="  max-w-sm rounded overflow-hidden shadow-lg"
        onClick={() => setOpen(true)}
      >
        <img
          className=" w-full"
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
        />
        <div className=" px-6 pt-4 text-left" key={cocktail.idDrink}>
          <h4 className=" text-neutral-900 text-2xl font-bold ">
            {cocktail.strDrink}
          </h4>
          {/* <p className=" text-neutral-700">{stringIngredients}</p> */}
        </div>
        <div className=" px-6 py-4 text-left">
          <span className=" inline-block border-solid border-2 border-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {cocktail.strCategory}
          </span>
          <span className=" inline-block border-solid border-2 border-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {cocktail.strAlcoholic}
          </span>
          <span className=" inline-block border-solid border-2 border-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {cocktail.strGlass}
          </span>
        </div>
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div class="grid grid-cols-6 gap-4 max-w-5xl" key={cocktail.idDrink}>
          <div class="col-start-4 col-span-3 self-center px-12">
            <h3 className=" text-neutral-900 text-3xl font-bold mb-4">
              {cocktail.strDrink}
            </h3>
          </div>
          <div class="col-start-1 col-end-4 row-start-1 row-end-4 place-self-center">
            <img
              className=" w-full rounded-lg"
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
            />
          </div>
          <div className="col-start-4 px-12">
            <h4 className=" text-lg font-semibold">Measures</h4>
            <ul>
              <li className="">{cocktail.strMeasure1}</li>
              <li className="">{cocktail.strMeasure2}</li>
              <li className="">{cocktail.strMeasure3}</li>
              <li className="">{cocktail.strMeasure4}</li>
              <li className="">{cocktail.strMeasure5}</li>
              <li className="">{cocktail.strMeasure6}</li>
              <li className="">{cocktail.strMeasure7}</li>
              <li className="">{cocktail.strMeasure8}</li>
              <li className="">{cocktail.strMeasure9}</li>
              <li className="">{cocktail.strMeasure10}</li>
              <li className="">{cocktail.strMeasure11}</li>
              <li className="">{cocktail.strMeasure12}</li>
              <li className="">{cocktail.strMeasure13}</li>
              <li className="">{cocktail.strMeasure14}</li>
              <li className="">{cocktail.strMeasure15}</li>
            </ul>
          </div>
          <div class="col-end-7 col-span-2 ...">
            <h4 className=" text-lg font-semibold">Ingredients</h4>
            <ul>
              <li className="">{cocktail.strIngredient1}</li>
              <li className="">{cocktail.strIngredient2}</li>
              <li className="">{cocktail.strIngredient3}</li>
              <li className="">{cocktail.strIngredient4}</li>
              <li className="">{cocktail.strIngredient5}</li>
              <li className="">{cocktail.strIngredient6}</li>
              <li className="">{cocktail.strIngredient7}</li>
              <li className="">{cocktail.strIngredient8}</li>
              <li className="">{cocktail.strIngredient9}</li>
              <li className="">{cocktail.strIngredient10}</li>
              <li className="">{cocktail.strIngredient11}</li>
              <li className="">{cocktail.strIngredient12}</li>
              <li className="">{cocktail.strIngredient13}</li>
              <li className="">{cocktail.strIngredient14}</li>
              <li className="">{cocktail.strIngredient15}</li>
            </ul>
          </div>
          <div class="col-start-4 col-end-7 px-12">
            <h4 className=" text-lg font-semibold">Instructions</h4>
            <p>{cocktail.strInstructions}</p>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default Cocktailcard;
