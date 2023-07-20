const UserCollection = ({ collectedSuperheroes }) => {
  let hasCollection = collectedSuperheroes.length === 0 ? '' : 'Your Collection';

  return (
    <div className="user-collection-wrapper">
      <hr></hr><br></br>
      <h2>{hasCollection}</h2>
      <div className="user-collection">
        {collectedSuperheroes.map((superhero) => (
          <div key={superhero.id} className="collection-card">
            <img src={superhero.image.url} alt={superhero.name} width="100px" />
            <p>{superhero.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCollection;
