import axios from "axios"; 
import store from "../../Store/Store/StoreAll";
import { changeLoader } from "../../Store/Actions/Loader";

const axiosInstance = axios.create({
  baseURL: "https://newsapi.org/v2",
  params: {
    apiKey: "222d8e2006ba4c319c20358d5fac7b1e",
  },
});

axiosInstance.interceptors.request.use(
  (req) => {
    store.dispatch(changeLoader(true));
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    store.dispatch(changeLoader(false));
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
