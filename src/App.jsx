// App.jsx
import React, { useState, useEffect } from 'react';
import FighterList from './component/FighterList';
import TeamList from './component/TeamList';
import Stats from './component/Stats';
import './App.css'; 

function App() {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ]
  ]);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
    } else {
      console.log('Not enough money');
    }
  };

  const handleRemoveFighter = (fighter) => {
    const updatedTeam = team.filter((teamFighter) => teamFighter.id !== fighter.id);
    const removedFighter = team.find((teamFighter) => teamFighter.id === fighter.id);

    if (removedFighter) {
      setTeam(updatedTeam);
      setMoney(money + removedFighter.price);
    }
  };

  const calculateStats = () => {
    const strength = team.reduce((acc, fighter) => acc + fighter.strength, 0);
    const agility = team.reduce((acc, fighter) => acc + fighter.agility, 0);
    setTotalStrength(strength);
    setTotalAgility(agility);
  };

  useEffect(() => {
    calculateStats();
  }, [team]);

  const teamStats = team.reduce((stats, fighter) => {
    stats.cost += fighter.price;
    stats.strength += fighter.strength;
    stats.agility += fighter.agility;
    return stats;

  }, { cost: 0, strength: 0, agility: 0 });

  return (
    <div className="App">
      <h1>Zombie Fighter Team Builder</h1>


      <FighterList fighters={zombieFighters} onAddFighter={handleAddFighter} />

      <h2>Current Money: ${money}</h2>

      <TeamList team={team} onRemoveFighter={handleRemoveFighter} />

      <Stats
        cost={teamStats.cost}
        totalStrength={totalStrength}
        totalAgility={totalAgility} />
    </div>
  );
}

export default App;