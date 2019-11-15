import axios from 'axios'

//create const with axios that will use the baseURL to send request
const api = axios.create({
    baseURL: 'http://' + window.location.hostname + ':4000/api',
})

//----------------------------CRUD for hotels-------------------------------------
export const insertHotel = payload => api.post(`/hotel`, payload)
export const getAllHotels = () => api.get(`/hotels`)
export const getHotelById = id => api.get(`/hotel/${id}`)
export const getHotelsByName = name => api.get(`/hotels/name/${name}`)
export const getHotelsPayload = payload => api.get(`/hotels/payload/${payload.stars}/${payload.priceRange}`)
export const updateHotelById = (id, payload) => api.put(`/hotel/${id}`, payload)
export const deleteHotelById = id => api.put(`/hotel/delete/${id}`)

//----------------------------CRUD for users-------------------------------------
export const insertUser = payload => api.post(`/user`, payload)
export const getAllUsers = () => api.get(`/users`)
export const getUserById = id => api.get(`/user/${id}`)
export const getUserByEmail = email => api.get(`/user/email/${email}`)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUserById = id => api.put(`/user/delete/${id}`)

//----------------------------CRUD for reviews-------------------------------------
export const insertReview = payload => api.post(`/review`, payload)
export const getAllReviews = () => api.get(`/reviews`)
export const getReviewById = id => api.get(`/review/${id}`)
export const getReviewsByHotelId = id => api.get(`/review/hotel/${id}`)
export const updateReviewById = (id, payload) => api.put(`/review/${id}`, payload)
export const deleteReviewById = id => api.put(`/review/delete/${id}`)


const apis = {
    insertHotel,
    getAllHotels,
    getHotelById,
    getHotelsByName,
    getHotelsPayload,
    updateHotelById,
    deleteHotelById,

    insertUser,
    getAllUsers,
    getUserById,
    getUserByEmail,
    updateUserById,
    deleteUserById,

    insertReview,
    getAllReviews,
    getReviewById,
    getReviewsByHotelId,
    updateReviewById,
    deleteReviewById
}

export default apis