import { baseURL } from "@/constants";
import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: baseURL,
});

export const setBearerToken = (token: string) => {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default axiosInstance;
