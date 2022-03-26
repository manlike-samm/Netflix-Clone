const API_KEY = process.env.REACT_APP_TMDBAPI_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/trending/all/week?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/trending/all/week?api_key=${API_KEY}&with_genres=27`,
  fetchRomanticMovies: `/trending/all/week?api_key=${API_KEY}&with_genres=10749`,
  fetchPopular: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
  
}

export default requests;