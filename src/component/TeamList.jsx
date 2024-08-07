// TeamList.jsx
import React from 'react';

const TeamList = ({ team, onRemoveFighter }) => {
  return (
    <div>
      <h2>Your Team</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map(fighter => (
            <li key={fighter.id} className="team-item">
              <img src={fighter.image} alt={fighter.name} className="fighter-image" />
              <h3>{fighter.name}</h3>
              <p>Price: ${fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => onRemoveFighter(fighter.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TeamList;
