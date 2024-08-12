import React from 'react';

const TeamList = ({ team, onRemoveFighter }) => (
  <div>
    <h2>Your Team</h2>
    {team.length === 0 ? (
      <p>Pick some team members!</p>
    ) : (
      <ul>
        {team.map((fighter, index) => (
          <li key={index}>
            <img src={fighter.img} alt={fighter.name} />
            <p>{fighter.name}</p>
            <button onClick={() => onRemoveFighter(index)}>Remove</button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default TeamList;
