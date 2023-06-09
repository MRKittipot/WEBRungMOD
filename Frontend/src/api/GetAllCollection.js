import axios from 'axios';
import { BASE_URL } from './constants';

axios.defaults.baseURL = BASE_URL;

const GetAllCollectionAPI = async () => {
  const res = await axios
    .get('/document')
    .then((response) => response.data)
    .catch((error) => error.response.data);

  return res;
};

export default GetAllCollectionAPI;
