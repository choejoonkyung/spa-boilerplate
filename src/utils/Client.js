import axios from "axios";

const DEFAULT_BASE_URL = "https://jsonplaceholder.typicode.com";
const TIME_OUT = 5000;

class Client {
  _instance;

  constructor(baseURL, options) {
    this._instance = axios.create({
      baseURL: baseURL ?? DEFAULT_BASE_URL,
      timeout: TIME_OUT,
      ...options,
    });
  }

  _setReqInterceptor() {
    this._instance.interceptors.request.use((reqConfig) => {
      return reqConfig;
    });
  }

  _setResInterceptor() {
    this._instance.interceptors.response.use((res) => {
      return res;
    }, this._errorHandler);
  }

  _errorHandler(error) {
    throw error;
  }

  getInstance() {
    this._setReqInterceptor();
    this._setResInterceptor();
    return this._instance;
  }
}

export default Client;
