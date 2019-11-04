import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000/api',
})

export const insertHotel = payload => api.post(`/hotel`, payload)
export const getAllHotels = () => api.get(`/hotels`)
export const updateHotelById = (id, payload) => api.put(`/hotel/${id}`, payload)
export const getHotelById = id => api.get(`/hotel/${id}`)
export const getHotelByName = name => api.get(`/hotel/name/${name}`)


export const insertUser = payload => api.post(`/user`, payload)
export const getAllUsers = () => api.get(`/users`)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)
export const getUserById = id => api.get(`/user/${id}`)
export const getUserByEmail = email => api.get(`/user/email/${email}`)


export const insertReview = payload => api.post(`/review`, payload)
export const getAllReviews = () => api.get(`/reviews`)
export const updateReviewById = (id, payload) => api.put(`/review/${id}`, payload)
export const getReviewById = id => api.get(`/review/${id}`)
export const getReviewsByHotelId = id => api.get(`/review/hotel/${id}`)

const apis = {
    insertHotel,
    getAllHotels,
    updateHotelById,
    getHotelById,
    getHotelByName,

    insertUser,
    getAllUsers,
    updateUserById,
    getUserById,
    getUserByEmail,

    insertReview,
    getAllReviews,
    updateReviewById,
    getReviewById,
    getReviewsByHotelId
}

export default apis