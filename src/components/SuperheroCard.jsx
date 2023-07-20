import React from 'react';

const SuperheroCard = ({ superhero, stat }) => {
  if (!superhero) {
    // The superhero data is not yet loaded.
    return null;
  }

  return (
    <div>
      <h2>{superhero.name}</h2>
      <img src={superhero.image.url} alt={superhero.name} />
      <p>{stat}: {superhero.powerstats[stat]}</p>
    </div>
  );
};

export default SuperheroCard;
