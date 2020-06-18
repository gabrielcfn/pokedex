import React, { useState, useEffect } from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import PokemonDetalhe from './PokemonDetalhe/PokemonDetalhe';
import PokemonLista from './PokemonLista/PokemonLista';

/*
Ver como fazer com useEffect e useState
*/


const App = props => {

    const [infoState, setInfoState] = useState({
        versao: '1.0',
    })


    return (
      <BrowserRouter>
        <div className="App">
          <h1>Olá, estou usando React</h1>
          <ul className="nav">
            <li><a href="/">Home</a></li>
            <li><a href="/111">Poke 111</a></li>
          </ul>
          <Route path="/:entry_number" render={() => <PokemonDetalhe entry_number="111"></PokemonDetalhe>}></Route>
          <Route path="/" exact render={() => <PokemonLista></PokemonLista>}></Route>
          
        <h6>Versão: {infoState.versao}</h6>
        </div>
      </BrowserRouter>

    );
    
}

export default App;