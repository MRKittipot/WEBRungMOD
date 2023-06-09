import axios from 'axios';
import { BASE_URL } from './constants';

axios.defaults.baseURL = BASE_URL;

const verifyTokenAPI = async (token) => {
  try {
    const res = await axios.post('/jwt/verify', null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export default verifyTokenAPI;
