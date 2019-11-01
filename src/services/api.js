import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000/api',
})

export const insertHotel = payload => api.post(`/hotel`, payload)
export const getAllHotels = () => api.get(`/hotels`)
export const updateHotelById = (id, payload) => api.put(`/hotel/${id}`, payload)
export const getHotelById = id => api.get(`/hotel/${id}`)
export const getHotelByName = name => api.get(`/hotel/name/${name}`)

const apis = {
    insertHotel,
    getAllHotels,
    updateHotelById,
    getHotelById,
    getHotelByName
}

export default apis