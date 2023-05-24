import React, { useState, useEffect } from "react";
import Cocktailcard from "./CocktailCard";
import CocktailSearch from "./CocktailSearch";
import Heroa from "./Heroa";

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
    <main id="cocktails">
      <div className="container mt-32 mx-auto mb-16">
        <CocktailSearch searchText={(text) => setTerm(text)} />
        {!isLoading && !cocktails && (
          <h1 className=" text-5xl text-center mx-auto mt-32">
            No se encontraron cócteles
          </h1>
        )}
        {isLoading ? (
          <h1 className=" text-6xl text-center mx-auto mt-32">Cargando...</h1>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {cocktails?.map((cocktail) => (
              <Cocktailcard key={cocktail.idDrink} cocktail={cocktail} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Added;
