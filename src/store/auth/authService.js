import axios from 'axios';

// Register user
const register = async (userData) => {
	const response = await axios.post(
		'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDI3asXL7nJIx1Aio1Y_dgOfj-Xpw3zXJY',
		userData
	);
	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data));
	}
	return response.data;
};
// Login user
const login = async (userData) => {
	const response = await axios.post(
		'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDI3asXL7nJIx1Aio1Y_dgOfj-Xpw3zXJY',
		userData
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
