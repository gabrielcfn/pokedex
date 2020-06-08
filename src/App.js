import React from 'react';
import './App.css';

import Pokemon from './Pokemon/Pokemon';

/*
Ver como fazer com useEffect e useState
*/

function App() {
  let pokemons = [];
  const url = `https://pokeapi.co/api/v2/pokedex/2`;
  console.log(url);

  const buscarDados = (url) => {
    fetch(url)
      .then(
        (res) => {
          console.log(res);
          return res.json();
        }
      ).then((pokeLista) => {
          return pokeLista.pokemon_entries;
        }
      )
  }

  pokemons = buscarDados(url);

  return (
    <div className="App">
      <h1>Olá, estou usando React</h1>
      <Pokemon poke={{name: 'Bulbasaur', id:'001'}}>A strange seed was planted on its back at birth.The plant sprouts and grows with this Pokemon.</Pokemon>
      <Pokemon poke={{name: 'Ivysaur', id:'002'}}>When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.</Pokemon>
    </div>
  );
}

export default App;
