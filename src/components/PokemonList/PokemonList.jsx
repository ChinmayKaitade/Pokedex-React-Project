import "./PokemonList.css";
import Pokemon from "../Pokemon/Pokemon";
import Loading from "../Loading/Loading";
import usePokemonList from "../../hooks/usePokemonList";
import { useEffect } from "react";

function PokemonList() {
  const [pokemonListState, setPokemonListState] = usePokemonList(false);

  useEffect(() => {
    console.log("rendor");
  });

  return (
    <div className="pokemon-list-wrapper">
      <div className="pokemon-wrapper">
        {pokemonListState.isLoading ? (
          <Loading />
        ) : (
          pokemonListState.pokemonList.map((p) => (
            <Pokemon name={p.name} image={p.image} id={p.id} key={p.id} />
          ))
        )}
      </div>

      {/* Pagination Controls   */}
      <div className="controls">
        <button
          disabled={pokemonListState.prevUrl === null}
          onClick={() => {
            const urlToSet = pokemonListState.prevUrl;
            setPokemonListState({ ...pokemonListState, pokedexUrl: urlToSet });
          }}
        >
          Prev
        </button>
        <button
          disabled={pokemonListState.nextUrl === null}
          onClick={() => {
            console.log(pokemonListState);
            const urlToSet = pokemonListState.nextUrl;
            setPokemonListState({ ...pokemonListState, pokedexUrl: urlToSet });
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
