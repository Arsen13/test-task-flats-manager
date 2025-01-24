import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/flat/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    }
});

export default axiosInstance;