import React from 'react';

const GuessButton = ({ superhero, makeGuess, disabled }) => {
  if (!superhero) {
    // The superhero data is not yet loaded.
    return null;
  }

  const { name } = superhero;

  return (
    <button className="guess-button" onClick={() => makeGuess(superhero.id)} disabled={disabled}>
      Guess {name}
    </button>
  );
};

export default GuessButton;
