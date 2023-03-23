import React, { useState, useEffect } from "react";

function Added() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((results) => results.json())
      .then((data) => {
        setCocktails(data.drinks);
      });
  }, []);
  return (
    <div>
      {cocktails.map((drink) => {
        const {
          idDrink,
          strDrink,
          strCategory,
          strDrinkThumb,
          strInstructions,
        } = drink;
        return (
          <div className=" pb-40" key={idDrink}>
            <h2>{strDrink}</h2>
            <img src={strDrinkThumb} alt={strDrink} style={{ width: "300px"}} />
            <h5>{strCategory}</h5>
            <p>{strInstructions}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Added;
