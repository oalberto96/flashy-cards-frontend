import axios from "axios";

const API_ROOT = "http://localhost:8000/api/";

const requests = {
  get: url => axios.get(`${API_ROOT}${url}`),
  post: (url, body) => axios.post(`${API_ROOT}${url}`, body),
  put: (url, body) => axios.put(`${API_ROOT}${url}`, body),
  delete: url => axios.delete(`${API_ROOT}${url}`)
};

export const Auth = {
  login: credentials => requests.post("authentication/login/", credentials)
};
