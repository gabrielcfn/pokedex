import React from 'react';
import styles from './Pokemon.module.css';

const pokemon = (props) => {
    return (
        <div className={styles.container}>
            <p><a href={'/' + props.pokemon.entry_number}> Id:{props.pokemon.entry_number} - {props.pokemon.pokemon_species.name}</a></p>
        </div>);
}

export default pokemon;