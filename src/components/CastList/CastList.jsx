import avatar from '../../images/avatar.jpg';

const CastList = ({ credits }) => {
  return (
    <div>
      <ul>
        {credits &&
          credits.map(({ id, profile_path, name, character }) => {
            const profileAvatar = profile_path
              ? `https://image.tmdb.org/t/p/w500/${profile_path}`
              : avatar;
            return (
              <li key={id}>
                <img src={profileAvatar} alt={name} />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CastList;
