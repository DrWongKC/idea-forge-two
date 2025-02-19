import React from "react";
//import { observer } from "mobx-react";
import { observer } from "mobx-react-lite"

import PokemonRow from "./PokemonRow";
import store from "../store";

function PokemonTable() {
  return (
    <table width="100%">
      <tbody>
        {store.filteredPokemon.map((pokemon) => (
          <PokemonRow
            key={pokemon.id}
            pokemon={pokemon}
            onClick={(pokemon) => store.setSelectedPokemon(pokemon)}
          />
        ))}
      </tbody>
    </table>
  );
}

export default observer(PokemonTable);
