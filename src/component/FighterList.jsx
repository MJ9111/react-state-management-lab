// FighterList.jsx
import React from 'react';

const FighterList = ({ fighters, onAddFighter }) => {
  return (
    <div>
      <h2>Available Zombie Fighters</h2>
      <ul>
        {fighters.map(fighter => (
          <li key={fighter.id} className="fighter-item"> {[fighter.id]}
            <img src={fighter.image} alt={fighter.name} className="fighter-image" />
            <h3>{fighter.name}</h3>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => onAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FighterList;
