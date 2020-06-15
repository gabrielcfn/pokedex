import React from 'react';
import styles from './Pokemon.module.css';

const pokemon = (props) => {
    console.log('dentro de pokemon.js')
    console.log(props.pokemon)
    //console.log(props.pokemon.pokemon_species.name);
    return (
        <div className={styles.container}>
            <p>Id:{props.pokemon.entry_number} - {props.pokemon.pokemon_species.name}</p>
        </div>);
}

export default pokemon;