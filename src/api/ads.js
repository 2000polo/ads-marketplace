import axiosInstance from "./axiosInstance";

export const fetchPublicAds = () => {
    console.log("fetchPublicAds worked")
    return axiosInstance.get('/api/advertisements')
}

export const createAd = () => {
    console.log("fetchPublicAds worked")
    return axiosInstance.get('/api/advertisements?apiKey=dd57ae2d-91c1-4f65-9b56-267f3e42aa5c')
}