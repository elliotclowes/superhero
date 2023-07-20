import React from 'react';

const SuperheroCard = ({ superhero, hiddenStat }) => {
  if (!superhero) {
    // The superhero data is not yet loaded.
    return null;
  }

  const { name, image, powerstats, appearance } = superhero;

  return (
    <div>
      <h2>{name}</h2>
      <img src={image.url} alt={name} width="200px" />
      <h3>Stats</h3>
      {Object.entries(powerstats)
        .filter(([stat, value]) => value !== null)
        .map(([stat, value]) => (
          <p key={stat}>
            {stat === hiddenStat ? `${stat}: ???` : `${stat}: ${value}`}
          </p>
        ))}
      <h3>Appearance</h3>
      {appearance.gender ? <p>Gender: {appearance.gender}</p> : <p>Gender: Unknown</p>}
      {appearance.race ? <p>Race: {appearance.race}</p> : <p>Race: Unknown</p>}
      {appearance.height[0] !== '-' ? (
        <p>Height: {appearance.height[0]}</p>
      ) : (
        <p>Height: Unknown</p>
      )}
      {appearance.weight[0] !== '- lb' ? (
        <p>Weight: {appearance.weight[0]}</p>
      ) : (
        <p>Weight: Unknown</p>
      )}
    </div>
  );
};

export default SuperheroCard;
