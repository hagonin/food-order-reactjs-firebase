import axios from 'axios';
// import queryString from 'query-string';

const baseURL = 'http://localhost:3002';

const axiosClient = axios.create({
	baseURL: baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
	// paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
	// Handle token here ...
	return config;
});

axiosClient.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		// Handle errors
		console.log(error.message);
		throw error;
	}
);

export default axiosClient;
