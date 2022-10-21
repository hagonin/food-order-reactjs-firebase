import axiosClient from '../../api/apiAxios';

// Register user
const register = async (userData) => {
	const response = await axiosClient.post('/users', userData);
	if (response.status === 200) {
		localStorage.setItem('token', response.data.token);
		return { ...response, userData };
	} 
	return response.data
};
// Login user
const login = async (email, password) => {
	const response = await axiosClient.get('/users', { email, password });
	if (response.status === 200) {
		localStorage.setItem('token', response.data.token);
		return response;
	}
	return response.data;
};

// Feth user by token 
const fetchUserByToken = async({token}) => {
	const response = await axiosClient.get('/users', {token})
	if (response.status === 200) {
		return { ...response}
	}
	return response.data
}
// logout user

const logout = () => {
	localStorage.removeItem('user');
};

const authService = {
	register,
	login,
	logout,
	fetchUserByToken,
};
export default authService;
