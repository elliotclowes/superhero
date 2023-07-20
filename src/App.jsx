import React, { useState, useEffect } from 'react';

import SuperheroCard from './components/SuperheroCard';
import StatComparison from './components/StatComparison';
import GuessButton from './components/GuessButton';
import UserCollection from './components/UserCollection';
import GuessFeedback from './components/GuessFeedback';

import { useFetchSuperheroes } from './utils/api';

const App = () => {
  const { superhero1, superhero2, fetchSuperheroes } = useFetchSuperheroes();
  const [hiddenStat, setHiddenStat] = useState(null);
  const [collectedSuperheroes, setCollectedSuperheroes] = useState([]);
  const [guessFeedback, setGuessFeedback] = useState('');
  const [guessMade, setGuessMade] = useState(false);
  const [isFading, setIsFading] = useState(false); // Added isFading state

  const makeGuess = (id) => {
    const guessedSuperhero = id === superhero1.id ? superhero1 : superhero2;
    const otherSuperhero = id === superhero1.id ? superhero2 : superhero1;

    const isGuessCorrect = guessedSuperhero.powerstats[hiddenStat] > otherSuperhero.powerstats[hiddenStat];

    if (isGuessCorrect) {
      const message = `Correct! ${guessedSuperhero.name} had more ${hiddenStat} than ${otherSuperhero.name} (${guessedSuperhero.powerstats[hiddenStat]} vs ${otherSuperhero.powerstats[hiddenStat]}). ${guessedSuperhero.name} added to your collection :)`;
      setCollectedSuperheroes((prevCollectedSuperheroes) => [...prevCollectedSuperheroes, guessedSuperhero]);
      setGuessFeedback(message);
    } else {
      const message = `Incorrect! ${otherSuperhero.name} had more ${hiddenStat} than ${guessedSuperhero.name} (${otherSuperhero.powerstats[hiddenStat]} vs ${guessedSuperhero.powerstats[hiddenStat]}). A random card has been taken from your collection.`;
      if (collectedSuperheroes.length > 0) {
        const updatedCollection = [...collectedSuperheroes];
        const randomIndex = Math.floor(Math.random() * updatedCollection.length);
        updatedCollection.splice(randomIndex, 1);
        setCollectedSuperheroes(updatedCollection);
      }
      setGuessFeedback(message);
    }

    setGuessMade(true);
  };

  const handleGoAgain = async () => {
    setIsFading(true); // Set the flag to trigger the fade-out effect

    // Fetch new superheroes
    await fetchSuperheroes();

    setTimeout(() => {
      setGuessMade(false);
      setGuessFeedback('');
      setIsFading(false); // Reset the flag to fade-in the cards
    }, 1500); // Wait for 2 seconds before fading back in
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
      <div className="container">
        {superhero1 && superhero2 && (
          <>
            <SuperheroCard superhero={superhero1} hiddenStat={hiddenStat} isFading={isFading} />
            <SuperheroCard superhero={superhero2} hiddenStat={hiddenStat} isFading={isFading} />
          </>
        )}
      </div>
      {hiddenStat && !guessMade && (
        <StatComparison stat={hiddenStat} superhero1={superhero1} superhero2={superhero2} />
      )}
      {guessMade && (
        <div>
          <GuessFeedback guessFeedback={guessFeedback} />
          <div className="guess-button-container">
            <button className="guess-button" onClick={handleGoAgain}>
              Go again
            </button>
          </div>
        </div>
      )}
      {!guessMade && (
        <div className="guess-button-container">
          {superhero1 && (
            <GuessButton superhero={superhero1} makeGuess={makeGuess} disabled={guessMade} />
          )}
          {superhero2 && (
            <GuessButton superhero={superhero2} makeGuess={makeGuess} disabled={guessMade} />
          )}
        </div>
      )}
      <UserCollection collectedSuperheroes={collectedSuperheroes} />
    </div>
  );
};

export default App;
