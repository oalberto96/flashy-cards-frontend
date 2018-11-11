import axios from "axios";
import Cookies from "universal-cookie";

const API_ROOT = "http://localhost:8000/api/";
const cookies = new Cookies();

const requests = {
  get: url => axios.get(`${API_ROOT}${url}`),
  post: (url, body) => axios.post(`${API_ROOT}${url}`, body),
  put: (url, body) => axios.put(`${API_ROOT}${url}`, body),
  delete: url => axios.delete(`${API_ROOT}${url}`)
};

export const Auth = {
  login: credentials => requests.post("authentication/login/", credentials),
  configCookies: data => {
    cookies.set("csrftoken", data["csrf"], { path: "/" });
    cookies.set("token", data["token"], { path: "/" });
  },
  hasCookies: () => {
    const token = cookies.get("token");
    const csrfToken = cookies.get("csrftoken");
    return token != null && csrfToken != null;
  }
};

export const Lessons = {
  all: () => requests.get("lessons/lessons/")
};
