import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const API_ROOT = process.env.REACT_APP_API_SERVER;

export const mediaServer = process.env.REACT_APP_MEDIA_SERVER;

const requests = {
  get: url => axios.get(`${API_ROOT}${url}`),
  post: (url, body) => axios.post(`${API_ROOT}${url}`, body),
  put: (url, body) => axios.put(`${API_ROOT}${url}`, body),
  delete: url => axios.delete(`${API_ROOT}${url}`)
};

export const CDN = {
  getUrl: imageUrl =>
    imageUrl.includes("http") || imageUrl.includes("base64")
      ? imageUrl
      : `${mediaServer}/${imageUrl}`
};

export const Auth = {
  login: credentials => requests.post("authentication/login/", credentials),
  signUp: userData => requests.post("authentication/signup/", userData),
  configHeaders: () => {
    const session_cookie = cookies.get("token");
    if (session_cookie !== undefined) {
      const token = `Token ${session_cookie}`;
      axios.defaults.headers.common["Authorization"] = token;
    }
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFToken";
  },
  configCookies: data => {
    cookies.set("csrftoken", data["csrf"], { path: "/" });
    cookies.set("token", data["token"], { path: "/" });
  },
  removeHeaders: () => {
    delete axios.defaults.headers.common.Authorization;
  },
  hasCookies: () => {
    const token = cookies.get("token");
    const csrfToken = cookies.get("csrftoken");
    if (token != null && csrfToken != null) {
      return true;
    }
    return false;
  },
  clearCookies: () => {
    cookies.remove("csrftoken", { path: "/" });
    cookies.remove("token", { path: "/" });
  }
};

export const Lessons = {
  all: () => requests.get("lessons/lessons/"),
  get: lessonId => requests.get(`lessons/lessons/${lessonId}/`),
  create: lesson => requests.post("lessons/lessons/", lesson),
  update: (lessonId, lesson) =>
    requests.put(`lessons/lessons/${lessonId}/`, lesson),
  withConcepts: lessonId =>
    requests.get(`lessons/lessons/${lessonId}/concepts/`),
  delete: lessonId => requests.delete(`lessons/lessons/${lessonId}/`),
  saveTrainingScore: (lessonId, conceptsScore) =>
    requests.post(`lessons/lessons/${lessonId}/training/`, {
      concepts: conceptsScore
    })
};
