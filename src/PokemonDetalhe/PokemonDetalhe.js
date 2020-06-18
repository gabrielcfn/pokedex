import React, {useEffect, useState} from 'react';

const PokemonDetalhe = (props) => {

    const [pokemonSelecionadoState, setPokemonSelecionadoState] = useState({
        pokemonSelecionado: {}
      });

    useEffect( () => {
        (async () => {
            const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.entry_number}`)
                .then((res) => {
                    return res.json();
                })
                .then((resposta) => {
                    console.log('resposta => ', resposta)
                    return resposta
                })
                setPokemonSelecionadoState({pokemonSelecionado: pokemon})
        })()
    }, [props.entry_number])

    return(
        <div>
            {pokemonSelecionadoState.pokemonSelecionado.name}
        </div>
    )
}

export default PokemonDetalhe;
