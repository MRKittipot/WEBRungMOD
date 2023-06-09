import axios from 'axios';
import { BASE_URL } from './constants';

axios.defaults.baseURL = BASE_URL;

const RemoveCollectionAPI = async (file_id) => {
  const token = localStorage.getItem('token');

  const res = await axios
    .delete(`/users/${file_id}/remove`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);

  return res;
};

export default RemoveCollectionAPI;
