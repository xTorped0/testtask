import axios, { type CreateAxiosDefaults } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_REACT_APP_API_URL;

const options: CreateAxiosDefaults = {
	baseURL,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: false // Server cookies are not used
};

const network = axios.create(options);

export { network };
