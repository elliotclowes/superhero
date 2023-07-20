import React from 'react';

const GuessButton = ({ superhero, makeGuess }) => {
  if (!superhero) {
    // The superhero data is not yet loaded.
    return null;
  }

  const handleGuess = () => {
    makeGuess(superhero.id);
  };

  return (
    <button onClick={handleGuess}>
      Guess if {superhero.name} has the higher stat
    </button>
  );
};

export default GuessButton;
