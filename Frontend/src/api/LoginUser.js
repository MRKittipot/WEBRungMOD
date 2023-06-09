import axios from 'axios';
import { BASE_URL } from './constants';

axios.defaults.baseURL = BASE_URL;

/*
    email / password
*/

const LoginUserAPI = async (data) => {
  console.log(data);
  const res = await axios
    .post('/login', data)
    .then((res) => res.data)
    .catch((err) => err.response.data);

  return res;
};

export default LoginUserAPI;
