import React, { useState, useEffect } from 'react';
import SuperheroCard from './components/SuperheroCard';
import StatComparison from './components/StatComparison';
import GuessButton from './components/GuessButton';
import UserCollection from './components/UserCollection';
import { useFetchSuperheroes } from './utils/api';

const App = () => {
  const { superhero1, superhero2 } = useFetchSuperheroes();
  const [hiddenStat, setHiddenStat] = useState(null);
  const [collectedSuperheroes, setCollectedSuperheroes] = useState([]);

  const makeGuess = (id) => {
    // implement the logic for what should happen when a user makes a guess.
  };

  useEffect(() => {
    const getRandomStat = () => {
      const stats = Object.keys(superhero1?.powerstats || {});
      return stats[Math.floor(Math.random() * stats.length)];
    };

    setHiddenStat(getRandomStat());
  }, [superhero1]);

  return (
    <div>
      <SuperheroCard superhero={superhero1} hiddenStat={hiddenStat} />
      <SuperheroCard superhero={superhero2} hiddenStat={hiddenStat} />
      <StatComparison stat={hiddenStat} />
      <GuessButton superhero={superhero1} makeGuess={makeGuess} />
      <GuessButton superhero={superhero2} makeGuess={makeGuess} />
      <UserCollection collectedSuperheroes={collectedSuperheroes} />
    </div>
  );
};

export default App;
