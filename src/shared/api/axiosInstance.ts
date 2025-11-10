import axios from 'axios';

const BASE_URL = 'https://sms-backend-api-gxmt.onrender.com';

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true // Important for cookies (refresh token)
});

export default axiosInstance;