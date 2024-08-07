// Stats.jsx
import React from 'react';

const Stats = ({ cost, totalStrength, totalAgility }) => {
  return (
    <div>
      <h2>Team Stats</h2>
      <p>Total Cost: ${cost}</p>
      <p>Total Strength: {totalStrength}</p>
      <p>Total Agility: {totalAgility}</p>
    </div>
  );
};

export default Stats;
