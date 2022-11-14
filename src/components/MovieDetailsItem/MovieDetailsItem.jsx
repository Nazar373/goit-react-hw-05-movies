import { Link, useLocation } from 'react-router-dom';
const MovieDetailsItem = ({ data }) => {
  const location = useLocation();
  const { genres, overview, poster_path, title, name, vote_average } = data;
  
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title || name}
      />
      <h2>{title || name}</h2>
      <span>User score: {Math.round(vote_average * 10)}%</span>
      <h4>Overview</h4>
      <p>{overview}</p>
      <h4>Genres</h4>
      <p>
        {genres.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </p>
      <ul>
        <li>
          <Link to="cast" state={location.state}>Cast</Link>
        </li>
        <li>
          <Link to="reviews" state={location.state}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
};

export default MovieDetailsItem;
