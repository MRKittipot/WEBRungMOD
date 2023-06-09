import axios from 'axios';
import { BASE_URL } from './constants';

axios.defaults.baseURL = BASE_URL;

const GetDocumentByIdAPI = async (file_id) => {
  const res = await axios
    .get(`/document/${file_id}`)
    .then((res) => res.data)
    .catch((err) => err.response.data);

  return res;
};

export default GetDocumentByIdAPI;
