import axiosInstance from './axiosInstance';

export const loginUser = (email, password) => {
    return axiosInstance.post('/api/auth/local?apiKey=dd57ae2d-91c1-4f65-9b56-267f3e42aa5c', { "identifier": email, "password": password });
};

export const registerUser = (username, email, password) => {
    return axiosInstance.post('/api/auth/local/register?apiKey=dd57ae2d-91c1-4f65-9b56-267f3e42aa5c', {
        username,     // User's username
        email,        // User's email address
        password,     // Password
    })
}

export const fetchUserProfile = () => {
    return axiosInstance.get('/user/profile');
};
