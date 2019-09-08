import axios from 'axios';
import { BASE_URL } from './Constants';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    },
    timeout: 50000
});

// Adding interceptors to axios
axiosInstance.interceptors.request.use(
    config => {
        // To do get authorization and Bearer token from local storage and set
        console.log('Request interceptor is called');
        const configuration = config;
        const cridentials = { username: 'janedoe', password: 's00pers3cret' };
        configuration.auth = cridentials;
        axiosInstance.defaults.headers.common.Authorization = 's00pers3cret';
        return configuration;
    },
    error => {
        // Error block for request
        console.log(error);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => {
        console.log('Response interceptor is called');
        if (response) {
            return Promise.resolve({ data: response.data, status: response.status });
        }
        return Promise.resolve(response);
    },
    error => {
        // Error block for respons
        console.log(error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
