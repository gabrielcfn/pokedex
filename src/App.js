import React, { useState, useEffect } from 'react';
import './App.css';

import Pokemon from './Pokemon/Pokemon';

/*
Ver como fazer com useEffect e useState
*/


const App = props => {
    const [pokemonsState, setPokemonsState] = useState({
      pokemons: [
        {name: 'Bulbasaur', id:'001', flavor: 'A strange seed was planted on its back at birth.The plant sprouts and grows with this Pokemon.'},
        {name: 'Ivysaur', id:'002', flavor: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs'}
      ]
    });

    const [infoState, setInfoState] = useState({
        versao: '1.0',
        url: `https://pokeapi.co/api/v2/pokedex/2`
    })

    useEffect(() => {    
      fetch(infoState.url)
        .then((res) => {
          return res.json()
        }) 
        .then((resposta) => {
          console.log(resposta);
        })
    });

    const switchNameHandler = (novoNome = 'asaasas') => {
      setPokemonsState({
        pokemons: [
          {name: novoNome, id:'004', flavor: 'Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.'},
          {name: 'Charmeleon', id:'005', flavor: 'When it swings its burning tail, it elevates the temperature to unbearably high levels.'}
        ]
      });
    }

    return (
      <div className="App">
        <h1>Olá, estou usando React</h1>
        <button onClick={()=>switchNameHandler()}>Mudar Nome</button>
        <Pokemon poke={pokemonsState.pokemons[0]} click={switchNameHandler.bind(this, 'Torchic')}></Pokemon>
        <Pokemon poke={pokemonsState.pokemons[1]} click={()=>switchNameHandler('Cindaquil')}></Pokemon>
      <h6>Versão: {infoState.versao}</h6>
      </div>
    );
    
}

export default App;