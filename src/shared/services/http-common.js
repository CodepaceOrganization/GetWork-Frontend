/**  axios default configs */
import axios from "axios";
import {authenticationInterceptor} from "@/sections/iam/services/authentication.interceptor.js";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
/**
 * Axios instance
 * @summary http axios instance creation with default configs
 * @type {AxiosInstance}
 *
 */

const http = axios.create({
    baseURL: API_BASE_URL,
});

// Set default headers
http.defaults.headers.common['Content-type']                = 'application/json';
http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// Add a request interceptor
http.interceptors.request.use(authenticationInterceptor);

export default http;