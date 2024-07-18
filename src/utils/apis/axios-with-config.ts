import axios from "axios";

const axiosWithConfig = axios.create();
let bearerToken = "";

export const setAxiosConfig = (token: string) => {
  bearerToken = token;
};

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = "http://13.213.64.4";
  if (bearerToken !== "") {
    axiosConfig.headers.Authorization = `Bearer ${bearerToken}`;
  }
  return axiosConfig;
});

export default axiosWithConfig;