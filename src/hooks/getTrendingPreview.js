const API_KEY = process.env.API_KEY;
const API = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

async function getTrendingPreview() {
  const res = await fetch(API);
  const data = await res.json();

  const movies = data.results;
  return movies
}
export default getTrendingPreview;