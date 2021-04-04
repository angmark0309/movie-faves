import React from 'react';
import MovieItem from './MovieItem';
const MovieList = ({ movies }) => {
return (
  <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>
    {movies.map((movie) => (
        <MovieItem posterSrc={movie} key={movie}/>
      ))}
  </div>
)
};

export default MovieList
