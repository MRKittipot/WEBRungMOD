import axios from 'axios';
import { BASE_URL } from './constants';

axios.defaults.baseURL = BASE_URL;

const DeleteDocumentAPI = async (file_id) => {
  const response = await axios
    .delete(`document/${file_id}/delete`)
    .then((res) => res.data)
    .catch((err) => err.response.data);

  console.log(response);
  return response;
};

export default DeleteDocumentAPI;
