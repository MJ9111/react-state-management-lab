import React from 'react';

const Stats = ({ team }) => (
  <div>
    <h2>Stats</h2>
    <p>Total Strength: {team.reduce((total, fighter) => total + fighter.strength, 0)}</p>
    <p>Total Agility: {team.reduce((total, fighter) => total + fighter.agility, 0)}</p>
  </div>
);

export default Stats;
