import React from 'react';

const SuperheroCard = ({ superhero }) => {
  if (!superhero) {
    // The superhero data is not yet loaded.
    return null;
  }

  const { powerstats } = superhero;

  return (
    <div>
      <h2>{superhero.name}</h2>
      <img src={superhero.image.url} alt={superhero.name} />
      {Object.entries(powerstats)
        .filter(([stat, value]) => value !== null)
        .map(([stat, value]) => (
          <p key={stat}>{stat}: {value}</p>
        ))
      }
    </div>
  );
};

export default SuperheroCard;
