import axios from 'axios';
import { BASE_URL } from './constants';

axios.defaults.baseURL = BASE_URL;

/*

    name,
    surname,
    email,
    password,
    confirmPassword,
    year,
    sex,
    faculty,
    major,
    department,
    avatar,

*/

const UpdateUserAPI = async (user) => {
  const token = localStorage.getItem('token');

  const res = await axios
    .patch('/register', user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);

  return res;
};

export default UpdateUserAPI;
