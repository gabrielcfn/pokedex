import React, { useState, useEffect } from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

import Pokemon from './Pokemon/Pokemon';
import PokemonDetalhe from './PokemonDetalhe/PokemonDetalhe';
import PokemonLista from './PokemonLista/PokemonLista';

/*
Ver como fazer com useEffect e useState
*/


const App = props => {

    const [infoState, setInfoState] = useState({
        versao: '1.0',
    })


    const switchNameHandler = (novoNome = 'asaasas') => {
      // setPokemonsState({
      //   pokemons: [
      //     {name: novoNome, id:'004', flavor: 'Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.'},
      //     {name: 'Charmeleon', id:'005', flavor: 'When it swings its burning tail, it elevates the temperature to unbearably high levels.'}
      //   ]
      // });
    }

    return (
      <BrowserRouter>
        <div className="App">
          <h1>Olá, estou usando React</h1>
          <button onClick={()=>switchNameHandler()}>Mudar Nome</button>
          
        <h6>Versão: {infoState.versao}</h6>
        </div>
      </BrowserRouter>

    );
    
}

export default App;