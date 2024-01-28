import React from "react";
import "./css/Pokemon.css";
import { useNavigate } from "react-router-dom";

export function MainPokemon({
  name,
  image,
  setSelectedPokemon,
  height,
  weight,
  base_experience,
  backImage,
}) {
  const navigate = useNavigate();

  function pokemonDetails() {
    setSelectedPokemon({
      name,
      image,
      height,
      weight,
      base_experience,
      backImage,
    });
    navigate("/singlePokemon");
  }

  return (
    <div className="our-pokemon flex flex-col justify-center items-center">
      <div>
        {" "}
        <h2 className="text-2xl">{name.toUpperCase()}</h2>
      </div>
      <div>
        {" "}
        <img src={image} className="bg-bright mt-10" />
      </div>
      <div>
        {" "}
        <button
          type="button"
          className="hover:text-bright mt-8 text-lg font-mono"
          onClick={pokemonDetails}
        >
          See Details
        </button>
      </div>
    </div>
  );
}
