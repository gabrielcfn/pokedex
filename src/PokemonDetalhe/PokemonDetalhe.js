import React, {useEffect, useState} from 'react';

const PokemonDetalhe = (props) => {

    const [pokemonSelecionadoState, setPokemonSelecionadoState] = useState({
        pokemonSelecionado: {}
      });

    const entry_number = props.match.params.entry_number;

    useEffect( () => {
        (async () => {
            const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${entry_number}`)
                .then((res) => {
                    return res.json();
                })
                .then((resposta) => {
                    return resposta
                })
                setPokemonSelecionadoState({pokemonSelecionado: pokemon})
        })()
    }, [entry_number])

    return(
        <div>
            {pokemonSelecionadoState.pokemonSelecionado.name}
        </div>
    )
}

export default PokemonDetalhe;

