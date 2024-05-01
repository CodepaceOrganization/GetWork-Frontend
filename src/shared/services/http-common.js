// axios default configs
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const VITE_API_TUTORS = import.meta.env.VITE_API_TUTORS;

const http = axios.create({
    baseURL: API_BASE_URL,
    tutorsURL: VITE_API_TUTORS ,
    headers: {'Content-type': 'application/json'},
});

export default http;