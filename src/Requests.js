const API_KEY = process.env.REACT_APP_TMDB_API_KEY
const BASE_API_URL = "https://api.themoviedb.org/3"

const requests = {
    fetchTrending: `${BASE_API_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchHotstarTrending: `${BASE_API_URL}/discover/movie?api_key=${API_KEY}&with_watch_providers=Hotstar&region=IN&original_language=hi&sort_by=popularity.desc`,
    fetchActionMovies: `${BASE_API_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchRomanceMovies: `${BASE_API_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDramaMovies: `${BASE_API_URL}/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchAnimationMovies: `${BASE_API_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`,
}

export default requests;