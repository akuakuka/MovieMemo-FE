const axios = require('axios');
const baseURL = 'http://localhost:3001/api/users';
const a = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': baseURL,
  },
});
const getMyFriends = async () => {
  try {
    const response = await a.get('');
    return response.data;
  } catch (e) {
    console.error(e);
    return e;
  }
};
const sendFriendRequest = async id => {
  try {
    const response = await a.get(`/${id}`);
    return response.data;
  } catch (e) {
    console.error(e);
    return e;
  }
};
const localRegister = async reg => {
  try {
    const response = await a.post(`localregister/`, reg);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
const localLogin = async reg => {
  try {
    const response = await a.post(`locallogin/`, reg);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
const searchForUsers = async searchterm => {
  try {
    const response = await a.get(`search/${searchterm}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
const getMyGroups = async () => {
  try {
    const response = await a.get(`group/`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
const getMe = async () => {
  try {
    const response = await a.get(`getme/`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
const createNewGroup = async name => {
  try {
    const response = await a.post(`group/${name}`);
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
  localRegister,
  localLogin,
  getMe,
};
