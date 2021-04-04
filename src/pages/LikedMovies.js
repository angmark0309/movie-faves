import React, { useEffect } from 'react';
import MovieList from '../compontents/MovieList';
import { useMyContext } from '../customHooks';
const LikedMovies = () => {
  const { likedMovies } = useMyContext();
  return (
    <div>
      <h2>Liked Movies</h2>
      <MovieList movies={likedMovies} />
    </div>
  );
}
export default LikedMovies
