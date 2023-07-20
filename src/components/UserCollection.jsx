const UserCollection = ({ collectedSuperheroes }) => {
    return (
        <div>
            {collectedSuperheroes.map(superhero => (
                <p key={superhero.id}>{superhero.name}</p>
            ))}
        </div>
    );
};


export default UserCollection
