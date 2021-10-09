import axios, { AxiosError, AxiosResponse } from "axios";

const response = (r: AxiosResponse) => r;

const error = (e: AxiosError) => Promise.reject(e);

const REACT_APP_API_HOST = "http://localhost:8080/api/";

export const api = axios.create({
  baseURL: REACT_APP_API_HOST,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(response, error);

export const formatError = (r: any): Error => {
  let message;
  if (r.err) {
    message = r.err;
  } else if (r.body && r.body.message) {
    message = r.body.message;
  } else if (r.body) {
    message = r.body;
  } else {
    // handle statuses
    switch (r.status) {
      case 400:
        message = "Bad Request";
        break;
      case 401:
        message = "Not authorized";
        break;
      case 403:
        message = "Forbidden";
        break;
      case 404:
        message = "Not Found";
        break;
      case 422:
        message = "Unprocessable Request";
        break;
      default:
        message = "Something went wrong. Please try again at a later time.";
        break;
    }
  }

  return new Error(message);
};
