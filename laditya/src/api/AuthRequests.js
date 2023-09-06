import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:5000" });

export const logIn = (userDetails) => API.post('/auth/logininduser', userDetails);

export const signUp = (userDetails) => API.post('/auth/signupinduser', userDetails);