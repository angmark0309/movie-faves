const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd0f5f2e135336200362af8a1a73acb17';

const getPopularMovies = async () => {
  const movieResponse = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  const movies = await movieResponse.json();
  return movies
};

const getConfiguration = async () => {
  const configurationResponse = await fetch(`${BASE_URL}/configuration?api_key=${API_KEY}`);
  const configuration = await configurationResponse.json();
  return configuration;
};


const apiProvider = {
 getPopularMovies,
 getConfiguration
};

export default apiProvider;
