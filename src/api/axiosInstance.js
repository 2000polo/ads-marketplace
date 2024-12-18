import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://ads.planetmedia.app/', // Replace with your API base URL
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'dd57ae2d-91c1-4f65-9b56-267f3e42aa5c'
    },
});

// Add an interceptor to include the token (if needed)
axiosInstance.interceptors.request.use((config) => {
    console.log("printing congfig", config)
    const token = localStorage.getItem('token'); // Or use Redux to get the token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosInstance;
