import React, {useEffect, useState} from 'react';
import Pokemon from '../Pokemon/Pokemon';

const PokemonLista = () => {

    const url = `https://pokeapi.co/api/v2/pokedex/2`;
    
    const [pokemonsState, setPokemonsState] = useState({
        pokemons: []
    });

    useEffect(() => {
        ( async () => {
          const pokedex = await fetch(url)
            .then((res) => {
              return res.json()
            }) 
            .then((resposta) => {
              return resposta.pokemon_entries;
            })
            setPokemonsState({pokemons: pokedex})
        })()    
        
      }, [url]);

    return <div className="container-pai">
    {
      pokemonsState.pokemons.map((pokemon, idx) => {
        return <Pokemon key={idx} pokemon={pokemon}></Pokemon>
      })
    }
    </div>
}

export default PokemonLista;