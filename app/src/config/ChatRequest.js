import axios from 'axios'

const API = axios.create({baseURL: process.env.CONFIG})

export const userChats = (id) => API.get(`/chat/${id}`)