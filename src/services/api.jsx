import axios from 'axios';

const apiClient = axios.create({
    baseURL: "http://localhost:5173/",
    tiemeout: 5000
}) 

export const login = async (data )=>{
    try {
        return await apiClient.post('/auth/login', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}