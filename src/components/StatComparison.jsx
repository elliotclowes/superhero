import React from 'react';

const StatComparison = ({ stat, isGuessCorrect, superhero1, superhero2 }) => {
  const getStatValue = (superhero, stat) => {
    if (superhero && superhero.powerstats.hasOwnProperty(stat)) {
      return superhero.powerstats[stat];
    }
    return null;
  };

  const statValue1 = getStatValue(superhero1, stat);
  const statValue2 = getStatValue(superhero2, stat);

  let comparisonText = '';

  if (!isGuessCorrect) {
    comparisonText = `Who has the higher ${stat}?`;
  } else if (statValue1 !== null && statValue2 !== null) {
    comparisonText = `Correct! ${superhero1.name} had more ${stat} than ${superhero2.name} (${statValue1} vs ${statValue2}).`;
  }

  return <h3 className="stat-comparison">{comparisonText}</h3>;
};

export default StatComparison;
