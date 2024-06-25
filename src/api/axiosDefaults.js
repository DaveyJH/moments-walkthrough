import axios from "axios";

axios.defaults.baseURL = "https://react-walkthrough-42-a1578d503c9f.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
