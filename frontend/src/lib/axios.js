import axios from "axios";

const port = 8080

export const axiosInstance = axios.create({
    baseURL: `http://localhost:${port}/api`,
    withCredentials: true
});

