import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [searchText, setSearchText] = useState("");
    
  useEffect(() => {
      fetch("http://localhost:3001/pokemon")
      .then((r) => r.json())
      .then((pokemon) => setPokemon(pokemon))
    }, [])

  function handleAddPokemon(newPokemon) {
    setPokemon([...pokemon, newPokemon])
  }  

  const pokemonsToDisplay = pokemon.filter((poke) => 
    poke.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search searchText={searchText} onChangeSearch={setSearchText}/>
      <br />
      <PokemonCollection pokemon={pokemonsToDisplay}/>
    </Container>
  );
}

export default PokemonPage;
