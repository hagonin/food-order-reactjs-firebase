import { useEffect, useState } from 'react';
import Title from '../components/Title/Title';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, register } from '../store/auth/authSlice';
import Spinner from '../components/Spinner/Spinner';

const Register = () => {
	const [formData, setFormData] = useState({
		username:'',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const { username, email, password, confirmPassword } = formData;
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isError) {
			console.log('Error please find anothe solution');
		}
		if (isSuccess || user) {
			navigate('/home');

			dispatch(authActions.reset());
		}
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const handleChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			console.log('Passwords do not match');
		} else {
			const userData = {
				username,
				email,
				password,
				confirmPassword,
			};
			dispatch(register(userData));
		}
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<Title title="Signup">
			<CommonSection title="Register Your Account" />
			<section className="my-3">
				<Container>
					<Row>
						<Col lg="10" md="6" sm="12" className="m-auto text-center">
							<h5 className="text-center">Please create an account</h5>
							<form className="form mb-5" onSubmit={handleSubmit}>
								<div className="form__group">
									<input
										type="text"
										placeholder="Username"
										required
										name="username"
										value={username}
										onChange={handleChange}
									/>
								</div>
								<div className="form__group">
									<input
										type="email"
										placeholder="Email"
										required
										name="email"
										value={email}
										onChange={handleChange}
									/>
								</div>
								<div className="form__group">
									<input
										type="password"
										placeholder="Password"
										required
										name="password"
										value={password}
										onChange={handleChange}
									/>
								</div>
								<div className="form__group">
									<input
										type="password"
										placeholder="Confirm Password"
										required
										name="confirmPassword"
										value={confirmPassword}
										onChange={handleChange}
									/>
								</div>
								<button type="submit" className="addToCart__btn">
									Sign Up
								</button>
							</form>
							<Link to="/login">Already have an account? Login</Link>
						</Col>
					</Row>
				</Container>
			</section>
		</Title>
	);
};

export default Register;
