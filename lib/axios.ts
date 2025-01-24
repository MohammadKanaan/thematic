import { baseURL } from "@/constants";
import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: baseURL,
  // headers: {
  //   "X-Requested-With": "XMLHttpRequest",
  // },
  // withCredentials: true,
  // withXSRFToken: true,
});

export const setBearerToken = (token: string) => {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default axiosInstance;
