import axios from 'axios'

const API = axios.create({baseURL: 'https://twittbook-socialmediaapp.up.railway.app'})

export const userChats = (id) => API.get(`/chat/${id}`)