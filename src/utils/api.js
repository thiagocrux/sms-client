import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-server-sms.herokuapp.com/api/v1',
});

export default api;
