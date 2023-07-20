import React from 'react';

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const SuperheroCard = ({ superhero, hiddenStat, isFading }) => {
  if (!superhero) {
    // The superhero data is not yet loaded.
    return null;
  }

  const { name, image, powerstats, appearance } = superhero;

  return (
    <div className={`card ${isFading ? 'fade-out' : ''}`}>
      <h2>{name}</h2>
      <img src={image.url} alt={name} height="270px" />
      <h3>Stats</h3>
      {Object.entries(powerstats)
        .filter(([stat, value]) => value !== null)
        .map(([stat, value]) => (
          <p key={stat}>
            {stat === hiddenStat ? `${capitalizeFirstLetter(stat)}: ???` : `${capitalizeFirstLetter(stat)}: ${value}`}
          </p>
        ))}
      <h3>Appearance</h3>
      <p>Gender: {appearance.gender !== 'null' ? appearance.gender : 'Unknown'}</p>
      <p>Race: {appearance.race !== 'null' ? appearance.race : 'Unknown'}</p>
      <p>Height: {appearance.height[0] !== '-' ? appearance.height[0] : 'Unknown'}</p>
      <p>Weight: {appearance.weight[0] !== '- lb' ? appearance.weight[0] : 'Unknown'}</p>
    </div>
  );
};

export default SuperheroCard;
