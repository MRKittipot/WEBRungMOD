import axios from 'axios';
import FormData from 'form-data';
import { BASE_URL } from './constants';
axios.defaults.baseURL = BASE_URL;

const CreateDocumentAPI = async (data) => {
  const formData = new FormData();

  formData.append('pdf', data.pdf);
  formData.append('year', data.year);
  formData.append('major', data.major);
  formData.append('title', data.title);
  formData.append('faculty', data.faculty);

  const response = await axios
    .post('document', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);

  console.log(response);

  return response;
};

export default CreateDocumentAPI;
