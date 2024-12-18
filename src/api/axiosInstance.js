import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://ads.planetmedia.app/', // Replace with your API base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add an interceptor to include the token (if needed)
// axiosInstance.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token'); // Or use Redux to get the token
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

export default axiosInstance;
