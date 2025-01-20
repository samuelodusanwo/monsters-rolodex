import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster" />
        <h3>{props.monster.name}</h3>
        <small>{props.monster.email}</small>
        <h1>{props.monster.username}</h1>
        <h3>{props.monster.name}</h3>
        <small>{props.monster.email}</small>
        <h1>{props.monster.username}</h1>
        
    </div>
)