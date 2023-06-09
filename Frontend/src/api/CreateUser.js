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

const CreateUserAPI = async (user) => {
  const res = await axios
    .post('/register', user)
    .then((res) => res.data)
    .catch((err) => err.response.data);

  return res;
};

export default CreateUserAPI;
