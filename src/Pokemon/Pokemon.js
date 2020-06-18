import React from 'react';
import styles from './Pokemon.module.css';
import { Link } from 'react-router-dom';

const pokemon = (props) => {
    const entry_number = props.pokemon.entry_number

    return (
        <div className={styles.container}>
            <p><Link to={'/' + entry_number}> Id:{entry_number} - {props.pokemon.pokemon_species.name}</Link></p>
        </div>);
}

export default pokemon;