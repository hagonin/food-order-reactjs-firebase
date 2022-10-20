import axios from 'axios';

// Register user
const register = async (userData) => {
	const response = await axios.post(
		'/users',
		userData
	);
	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data));
	}
	return response.data;
};
// Login user
const login = async (email, password) => {
	const response = await axios.get(
		'users',
		{ email, password }
	);
	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data));
	}

	return response.data;
};

// logout user

const logout = () => {
	localStorage.removeItem('user');
};
const authService = {
	register,
	login,
	logout,
};
export default authService;
