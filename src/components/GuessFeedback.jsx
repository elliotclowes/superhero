import React from 'react';

const GuessFeedback = ({ guessFeedback }) => {
  if (!guessFeedback) {
    return null;
  }

  return <h3 className="guess-feedback">{guessFeedback}</h3>;
};

export default GuessFeedback;
