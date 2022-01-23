import axios from "axios";
import { changeLoader } from "../../store/actions/loaderAction";
import store from "../../store/store";
const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

axiosInstance.interceptors.request.use(
  function (config) {
    store.dispatch(changeLoader(true));

    config.params = {
      api_key: "jhbdhbv5645425d85f",
    };

    config.headers = {
      token: "fdn54545cjhbv587",
      "content-type": "application/json",
    };
    console.log(config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    //related response

    store.dispatch(changeLoader(false));

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
