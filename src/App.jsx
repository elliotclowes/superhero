import React, { useState, useEffect } from 'react';
import SuperheroCard from './components/SuperheroCard';
import StatComparison from './components/StatComparison';
import GuessButton from './components/GuessButton';
import UserCollection from './components/UserCollection';
import { useFetchSuperheroes } from './utils/api';

const App = () => {
  const { superhero1, superhero2 } = useFetchSuperheroes();
  const [stat, setStat] = useState('');
  const [collectedSuperheroes, setCollectedSuperheroes] = useState([]);

  const makeGuess = (id) => {
    // Here you can implement the logic for what should happen when a user makes a guess.
    // For example, if the guess is correct, you could add the superhero to the collectedSuperheroes state.
  };

  useEffect(() => {
    // Fetch initial data when the component mounts.
    // You might also set the initial stat here.
  }, []);

  return (
    <div>
      <SuperheroCard superhero={superhero1} stat={stat} />
      <SuperheroCard superhero={superhero2} stat={stat} />
      {/* <StatComparison stat={stat} />
      <GuessButton superhero={superhero1} makeGuess={makeGuess} />
      <GuessButton superhero={superhero2} makeGuess={makeGuess} />
      <UserCollection collectedSuperheroes={collectedSuperheroes} /> */}
    </div>
  );
};

export default App;
