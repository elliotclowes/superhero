const UserCollection = ({ collectedSuperheroes }) => {

    let hasCollection = collectedSuperheroes.length === 0 ? '' : 'Your Collection'

    return (
        <div>
            <h2>{hasCollection}</h2>
            {collectedSuperheroes.map(superhero => (
                <p key={superhero.id}>{superhero.name}</p>
            ))}
        </div>
    );
};


export default UserCollection
