import axiosInstance from "./axiosInstance";

export const fetchPublicAds = () => {
    console.log("fetchPublicAds worked")
    return axiosInstance.get('/api/advertisements')
}

export const createAd = (payload) => {
    console.log("fetchPublicAds worked")
    return axiosInstance.post('/api/advertisements', {
        "title": payload.title,        // Title of the advertisement
        "price": payload.price,        // Price of the item
        "description": payload.description,  // Description of the advertisement
        "image": payload.image         // URL or base64 encoded image
    });
}