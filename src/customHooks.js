import apiProvider from './api';
import React, { useState, useEffect, createContext } from 'react';

let MyContext = React.createContext();
let { Provider } = MyContext;
 const useMyContext = () => React.useContext(MyContext);

 const MoviesProvider = ({ children }) => {
  const [likedMovies, setLikedMovies] = useState([]);
  return <Provider value={{ likedMovies, setLikedMovies }}>{children}</Provider>
}

const useMoviePosters = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getMoviesAndConfig = async () => {
     const { results: movies } = await apiProvider.getPopularMovies();
     const { images: { base_url, poster_sizes } } = await apiProvider.getConfiguration();
     const posterWidth = poster_sizes[6];
      const moviePosters = movies.map(movie => `${base_url}/${posterWidth}/${movie.poster_path}`);
      setData(moviePosters);
    }
    getMoviesAndConfig();
  }, []);
  return data
}

const useLikeButton = (posterSrc, setLikedMovies, likedMovies) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleOnClick = () => {
    const toggleIsClicked = !isClicked;
    setIsClicked(toggleIsClicked);
    likedMovies = likedMovies.filter(item => item !== posterSrc);
    if (toggleIsClicked) {
      setLikedMovies([...likedMovies, posterSrc])
    } else {
      setLikedMovies(likedMovies);
    }
  }
  return [handleOnClick, isClicked]
}
export {
  useMoviePosters,
  useLikeButton,
  MoviesProvider,
  useMyContext
}
