const axios = require('axios');
const baseURL = 'http://localhost:3001/api/omdb/movies';
const a = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': baseURL,
  },
}); //http://localhost:3001/api/omdb/movies/
const Login = async () => {
  console.log('GET MY MOVIES!');
  try {
    const response = await a.get('');
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export default { getMyMovies, searchForMovie, saveToMyMovies };
