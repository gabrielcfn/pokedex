import React from 'react';

const pokemon = (props) => {
    return (<div>
            <p>Id:{props.poke.id} - {props.poke.name}</p>
            <p>{props.poke.flavor}</p>
            </div>);
}

export default pokemon;