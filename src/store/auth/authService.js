import axiosClient from '../../api/apiAxios';

// Register user
const register = async (userData) => {
	const response = await axiosClient.post('/users', userData);
	if (response.data) {
		console.log('check authen ', response.data)
		localStorage.setItem('user', JSON.stringify(response.data));
	}
	return response.data;
};
// Login user
const login = async (email, password) => {
	const response = await axiosClient.get('users', { email, password });
	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data));
	}

	return response.data;
};

// logout user

const logout = () => {
	localStorage.removeItem('user');
};

const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem('user'));
}
const authService = {
	register,
	login,
	logout,
	getCurrentUser,
};
export default authService;
