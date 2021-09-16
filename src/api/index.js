import axios from 'axios';

const API = axios.create({ baseURL: 'https://events-tracker-manoj.herokuapp.com/'})

export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);
export const getEvents = () => API.get('/user/getEvents');
export const createEvents = (formData) => API.post('/user/createEvents', formData);
export const deleteEvent = (id) => API.delete(`/user/delete/${id}`)