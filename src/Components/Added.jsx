import React, { useState, useEffect } from "react";
import Cocktailcard from "./CocktailCard";
import CocktailSearch from "./CocktailSearch";
import Cocktails from "./Cocktails";

function Added() {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${term}`)
      .then((results) => results.json())
      .then((data) => {
        setCocktails(data.drinks);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    // <div>
    //   {cocktails.map((drink) => {
    //     const {
    //       idDrink,
    //       strDrink,
    //       strCategory,
    //       strDrinkThumb,
    //       strAlcoholic,
    //       strGlass,
    //       strInstructions,
    //       strIngredient1,
    //       strIngredient2,
    //       strIngredient3,
    //       strIngredient4,
    //       strIngredient5,
    //       strIngredient6,
    //       strIngredient7,
    //       strIngredient8,
    //       strIngredient9,
    //       strIngredient10,
    //       strIngredient11,
    //       strIngredient12,
    //       strIngredient13,
    //       strIngredient14,
    //       strIngredient15,
    //     } = drink;

    //     const ingredients = [
    //       strIngredient1,
    //       strIngredient2,
    //       strIngredient3,
    //       strIngredient4,
    //       strIngredient5,
    //       strIngredient6,
    //       strIngredient7,
    //       strIngredient8,
    //       strIngredient9,
    //       strIngredient10,
    //       strIngredient11,
    //       strIngredient12,
    //       strIngredient13,
    //       strIngredient14,
    //       strIngredient15,
    //     ];

    //     const stringIngredients = ingredients.filter((x) => x).join(" • ");
    //     console.log("Prueba", stringIngredients);

    //     return (
    //       <main className=" container mx-auto">
    //         <section className=" columns-3"></section>
    //       </main>
    //     );
    //   })}
    // </div>
    <div className="container mx-auto">
      <CocktailSearch searchText={(text) => setTerm(text)} />
      {!isLoading && cocktails.length === 0 && (
        <h1 className=" text-5xl text-center mx-auto mt-32">
          No se encontraron cocteles
        </h1>
      )}
      {isLoading ? (
        <h1 className=" text-6xl text-center mx-auto mt-32">Cargando...</h1>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {cocktails.map((cocktail) => (
            <Cocktailcard key={cocktail.idDrink} cocktail={cocktail} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Added;
