const axios = require('axios');
const baseURL = 'http://localhost:3001/api/users';
const a = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': baseURL,
  },
}); //http://localhost:3001/api/omdb/movies/
const getMyFriends = async () => {
  console.log('GetMyFriends');
  try {
    const response = await a.get('');
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
    return e;
  }
};
const sendFriendRequest = async id => {
  console.log('SendFriendRequsst');
  console.log(id);
  try {
    const response = await a.get(`/${id}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
    return e;
  }
};

const searchForUsers = async searchterm => {
  console.log('SearchForUsers');
  try {
    const response = await a.get(`search/${searchterm}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
const getMyGroups = async () => {
  console.log('Service - Get My groups');
  try {
    const response = await a.get(`group/`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
const createNewGroup = async name => {
  console.log('createnewgroup');
  try {
    const response = await a.post(`group/${name}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
export default {
  getMyFriends,
  sendFriendRequest,
  searchForUsers,
  getMyGroups,
  createNewGroup,
};
