import React from 'react';

const GuessFeedback = ({ guessFeedback }) => {
  if (!guessFeedback) {
    return null;
  }

  return <p className="guess-feedback">{guessFeedback}</p>;
};

export default GuessFeedback;
