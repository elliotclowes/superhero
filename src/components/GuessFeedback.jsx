import React from 'react';

const GuessFeedback = ({ guessFeedback }) => {
  if (!guessFeedback) {
    return null;
  }

  return <p>{guessFeedback}</p>;
};

export default GuessFeedback;
