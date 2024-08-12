import React from 'react';

const ZombieFighters = ({ fighters, onAddFighter }) => (
  <div>
    <h2>Available Fighters</h2>
    <ul>
      {fighters.map((fighter, index) => (
        <li key={index}>
          <img src={fighter.img} alt={fighter.name} />
          <p>{fighter.name}</p>
          <p>Price: {fighter.price}</p>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
          <button onClick={() => onAddFighter(fighter)}>Add</button>
        </li>
      ))}
    </ul>
  </div>
);

export default ZombieFighters;
