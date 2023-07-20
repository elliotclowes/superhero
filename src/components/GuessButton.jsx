const GuessButton = ({ superhero, makeGuess }) => {
    return <button onClick={() => makeGuess(superhero.id)}>{`I guess ${superhero.name}`}</button>;
};

export default GuessButton
