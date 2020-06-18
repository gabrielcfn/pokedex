import React, { useState, useEffect } from 'react';
import './App.css';

import { BrowserRouter, Route, Link } from 'react-router-dom';

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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/111">Poke 111</Link></li>
          </ul>
          <Route path="/:entry_number" component={PokemonDetalhe}></Route>
          <Route path="/" exact component={PokemonLista}></Route>
          
        <h6>Versão: {infoState.versao}</h6>
        </div>
      </BrowserRouter>

    );
    
}

export default App;