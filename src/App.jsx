import React, { useState, useEffect } from 'react';
import SuperheroCard from './components/SuperheroCard';
import StatComparison from './components/StatComparison';
import GuessButton from './components/GuessButton';
import UserCollection from './components/UserCollection';
import GuessFeedback from './components/GuessFeedback';
import { useFetchSuperheroes } from './utils/api';

const App = () => {
  const { superhero1, superhero2 } = useFetchSuperheroes();
  const [hiddenStat, setHiddenStat] = useState(null);
  const [collectedSuperheroes, setCollectedSuperheroes] = useState([]);
  const [guessFeedback, setGuessFeedback] = useState('');

  const makeGuess = (id) => {
    const guessedSuperhero = id === superhero1.id ? superhero1 : superhero2;
    const otherSuperhero = id === superhero1.id ? superhero2 : superhero1;

    const isGuessCorrect = guessedSuperhero.powerstats[hiddenStat] > otherSuperhero.powerstats[hiddenStat];

    if (isGuessCorrect) {
      // Handle correct guess
      const message = `Correct! ${guessedSuperhero.name} has been added to your collection.`;
      setCollectedSuperheroes((prevCollectedSuperheroes) => [...prevCollectedSuperheroes, guessedSuperhero]);
      setGuessFeedback(message);
    } else {
      // Handle wrong guess
      const message = `Wrong! You've lost a random card from your collection.`;
      if (collectedSuperheroes.length > 0) {
        const updatedCollection = [...collectedSuperheroes];
        const randomIndex = Math.floor(Math.random() * updatedCollection.length);
        updatedCollection.splice(randomIndex, 1);
        setCollectedSuperheroes(updatedCollection);
      }
      setGuessFeedback(message);
    }
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
      <GuessFeedback guessFeedback={guessFeedback} />
      <UserCollection collectedSuperheroes={collectedSuperheroes} />
    </div>
  );
};

export default App;
