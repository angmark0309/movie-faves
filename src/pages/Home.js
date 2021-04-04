 import React, { useEffect } from 'react';
import MovieList from '../compontents/MovieList';
import { useMoviePosters } from '../customHooks';
 const Home = () => {
   const posters = useMoviePosters()
  return (
  <div>
      <h2>Home</h2>
      <MovieList movies={posters} />
  </div>
  );
}
export default Home
