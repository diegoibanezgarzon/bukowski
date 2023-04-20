import React from "react";

const Imgcard = ({ cocktail }) => {
  return (
    <div className=" max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className=" w-full"
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
      />
      <div className=" px-6 py-4" key={cocktail.idDrink}>
        <h4 className=" text-neutral-900 text-2xl font-bold ">
          {cocktail.strDrink}
        </h4>
        <p className=" font-semibold text-lg text-neutral-500">
          {cocktail.stringIngredients}
        </p>
      </div>
      <div className=" px-6 py-4">
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
    </div>
  );
};

export default Imgcard;
