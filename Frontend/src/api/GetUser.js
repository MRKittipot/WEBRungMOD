import axios from 'axios';
import { BASE_URL } from './constants';

axios.defaults.baseURL = BASE_URL;

//api/users/:user_id
const GetUserByIdAPI = async (user_id) => {
  const res = await axios
    .get(`/users/${user_id}`)
    .then((res) => res.data)
    .cache((err) => err.response.data);

  return res;
};

export default GetUserByIdAPI;
