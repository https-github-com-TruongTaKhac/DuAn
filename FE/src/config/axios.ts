import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

instance.interceptors.response.use(
  response => response,
  error => {
    console.error('API call error:', error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

export default instance;
