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
};

export const updateUserProfile = (payload) => {
    return axiosInstance.put('/api/profile', {
        "firstName": payload?.['first-name'],
        "lastName": payload?.['last-name'],
        "email": payload?.email,
        "username": payload?.username,
        "phone": payload?.phn,
        "location": payload?.location
    })
};

export const fetchUserProfile = () => {
    return axiosInstance.get('/api/profile');
};
