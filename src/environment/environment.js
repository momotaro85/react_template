import axios from 'axios';
import {toast} from "react-toastify";

const axiosInstance = axios.create({
	baseURL: 'http://localhost:3000/api/v1',
});

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
	// Do something before request is sent
	return config;
}, function (error) {
	// Do something with request error
	return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
	// Any status code that lie within the range of 2xx cause this function to trigger
	// Do something with response data
	// possible to intercept with toast from react-toastify
	return response;
}, function (error) {
	// Any status codes that falls outside the range of 2xx cause this function to trigger
	// Do something with response error
	// possible to intercept with toast from react-toastify
	return Promise.reject(error);
});

export const http = axiosInstance;
