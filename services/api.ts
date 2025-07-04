export const TMDB_CONFIG = {
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    BASE_URL: 'https://api.themoviedb.org/3',
    Headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
    },
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