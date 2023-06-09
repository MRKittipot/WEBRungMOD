import axios from 'axios';
import { BASE_URL } from './constants';

axios.defaults.baseURL = BASE_URL;

const AddCollectionAPI = async (file_id) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return {
      status: 401,
      message: 'Unauthorized',
    };
  }

  const res = await axios
    .patch(`/users/${file_id}/add`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);

  return res;
};

export default AddCollectionAPI;
