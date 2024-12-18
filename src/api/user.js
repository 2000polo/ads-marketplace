import axiosInstance from './axiosInstance';

export const loginUser = (email, password) => {
    return axiosInstance.post('/api/auth/local', { "identifier": email, "password": password });
};

export const registerUser = (username, email, password) => {
    return axiosInstance.post('/api/auth/local/register', {
        username,     // User's username
        email,        // User's email address
        password,     // Password
    })
}

export const fetchUserProfile = () => {
    return axiosInstance.get('/user/profile');
};
