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
    <button className="guess-button" onClick={handleGuess}>
      {superhero.name}
    </button>
  );
};

export default GuessButton;
