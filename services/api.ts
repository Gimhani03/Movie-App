export const TMDB_CONFIG = {
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    BASE_URL: 'https://api.themoviedb.org/3',
    Headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
    },
}

export const fetchMovies = async ({query}: {query: string}) => {
    const endpoint = query
    ?`${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    :`${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.Headers,
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }
    const data = await response.json();
    return data.results;
}

export const fetchMovieDetails = async (movieId: string): Promise<MovieDetails> => {
   try {
    const response = await fetch(`${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`, {
        method: 'GET',
        headers: TMDB_CONFIG.Headers,
    });

    if (!response.ok) 
        throw new Error(`Failed to fetch movie details: ${response.statusText}`);
    const data = await response.json();
    return data as MovieDetails;
    
   } catch (error) {
    console.log(error);
    throw error;
   }
}

//const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
//const options = {
  //method: 'GET',
  //headers: {
    //accept: 'application/json',
    //Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmZjODhkOTdhZGY3NTI2NGU4YTc1NTgyNjljM2QyYiIsIm5iZiI6MTc1MTYyNDQ0NS40NDMsInN1YiI6IjY4NjdhYWZkYzVhMTYwYTkwMTVlMzZjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mS7Z4bp2WFN-mvczFr5qJVp8Qad5Mo7okufsSH_qFT8'
  //}
//};

//fetch(url, options)
  //.then(res => res.json())
  //.then(json => console.log(json))
  //.catch(err => console.error(err));