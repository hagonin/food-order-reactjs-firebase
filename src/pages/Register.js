import { useEffect, useState } from 'react';
import Title from '../components/Title/Title';
import CommonSection from '../containers/common-section/CommonSection';
import {
	Container,
	Row,
	Col,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
} from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, register } from '../store/auth/authSlice';
import toast from 'react-hot-toast';

const Register = () => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const { username, email, password, confirmPassword } = formData;
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const {isError, isSuccess, errorMessage } = useSelector(
		(state) => state.auth
	);

	const handleChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		//
		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		} else {
			const userData = {
				username,
				email,
				password
			};
			console.log('register successfully', userData);
			dispatch(register(userData));
		}
	};

	useEffect(() => {
		return () => {
			dispatch(authActions.reset());
		};
	}, []);

	useEffect(() => {
		if (isSuccess) {
			dispatch(authActions.reset());
			navigate('/login');
		}

		if (isError) {
			toast.error(errorMessage);
			dispatch(authActions.reset());
		}
	}, [isSuccess, isError]);

	return (
		<Title title="Signup">
			<CommonSection title="Register Your Account" />
			<section className="my-3">
				<Container>
					<Row className="d-flex align-items-center justify-content-center">
						<Col lg="4" md="6" sx="12" className="mt-4">
							<h3 className="text-center mb-5 fw-bold text-success">
								Registration Form
							</h3>
							<Form onSubmit={handleSubmit}>
								<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
									<Label for="username" className="mr-sm-2">
										Your Username
									</Label>
									<Input
										type="username"
										name="username"
										id="username"
										value={username}
										onChange={handleChange}
									/>
								</FormGroup>
								<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
									<Label for="email" className="mr-sm-2">
										Your Email
									</Label>
									<Input
										type="email"
										name="email"
										id="email"
										value={email}
										onChange={handleChange}
									/>
								</FormGroup>
								<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
									<Label for="password" className="mr-sm-2">
										Your Password
									</Label>
									<Input
										type="password"
										name="password"
										id="password"
										value={password}
										onChange={handleChange}
									/>
								</FormGroup>

								<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
									<Label for="confirmPassword" className="mr-sm-2">
										Confirm Password
									</Label>
									<Input
										type="password"
										name="confirmPassword"
										id="confirmPassword"
										value={confirmPassword}
										onChange={handleChange}
									/>
								</FormGroup>
								<FormGroup check className="d-flex mt-5 flex-column gap-2">
									<Label check>
										<Input type="checkbox" />I consent to Herboil processing my
										personal data in order to send personalized marketing
										material in accordance with the consent form and the privacy
										policy.
									</Label>
									<Label check>
										<Input type="checkbox" />
										By clicking "create account", I consent to the privacy
										policy.
									</Label>
								</FormGroup>
								<Button
									color="success"
									size="lg"
									block
									className=" text-uppercase mt-4"
								>
									Sign Up
								</Button>
								<div className="d-flex flex-column align-items-center mb-5">
									<div className="my-4">
										<p>By creating an account, you agree to our:</p>
										<p>TERMS OF CONDITIONS | PRIVACY POLICY</p>
									</div>
									<Link to="/login" className="text-decoration-underline">
										Already have an account? Login
									</Link>
								</div>
							</Form>
						</Col>
					</Row>
				</Container>
			</section>
		</Title>
	);
};

export default Register;
