import React, { useState } from "react";
const CocktailSearch = ({ searchText }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div className="max-w-2xl rounded overflow-hidden mb-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-2xl">
        <div className="flex items-center border-2 border-black p-2 rounded-full">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Buscar coctel..."
          />
          <button
            className="flex-shrink-0 px-8 bg-black hover:bg-gray-800 border-black hover:border-gray-800 text-sm border-4 text-white py-1 px-2 rounded-full"
            type="submit"
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};
export default CocktailSearch;
