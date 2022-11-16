import { useEffect, useRef } from 'react';
import bg from '../assets/images/super-dinner.png';
import {
	Container,
	Row,
	Col,
	FormGroup,
	Label,
	Input,
	Form,
	Button,
} from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import Title from '../components/Title/Title';
import CommonSection from '../containers/common-section/CommonSection';
import { authActions, login } from '../store/auth/authSlice';

const Login = () => {
	const loginMailRef = useRef();
	const loginPasswordRef = useRef();

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { isSuccess, isError, errorMessage } = useSelector(
		(state) => state.auth
	);

	const submitHandler = (e) => {
		e.preventDefault();

		const userData = {
			loginMailRef,
			loginPasswordRef,
		};

		dispatch(login(userData));
		alert('Login successfully!');
		navigate('/home');
	};
	useEffect(() => {
		return () => {
			dispatch(authActions.reset());
		};
	}, []);

	useEffect(() => {
		if (isError) {
			toast.error(errorMessage);
			dispatch(authActions.reset());
		}

		if (isSuccess) {
			dispatch(authActions.reset());
			navigate('/home');
		}
	}, [isError, isSuccess]);

	return (
		<Title title="Login">
			<CommonSection title="Sign In" />
			<section className="my-3 mb-5">
				<Container>
					<Row>
						<Col md="4" className="m-5">
							<h3>
								Login to <strong className="text-warning">Healthy Food</strong>
							</h3>
							<p className="mb-4">
								Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
								consectetur adipisicing.
							</p>
							<Form onSubmit={submitHandler}>
								<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
									<Label for="email" className="mr-sm-2">
										Your Email
									</Label>
									<Input
										type="email"
										name="email"
										id="email"
										ref={loginMailRef}
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
										ref={loginPasswordRef}
									/>
								</FormGroup>
								<FormGroup
									check
									className="d-flex mt-2 align-items-center justify-content-between"
								>
									<Label check>
										<Input type="checkbox" /> Remember me
									</Label>
									<Button color="link" className="text-underline text-warning">
										Forgot password
									</Button>
								</FormGroup>

								<Button
									color="success"
									size="lg"
									block
									className=" text-uppercase mt-5"
								>
									Login
								</Button>
							</Form>
						</Col>

						<Col lg="6" md="6" sm="12" className="text-center">
							<img src={bg} alt="bg" className="w-50" />
							<h5>Don't have an account ?</h5>
							<p className="m-auto ">
								Add items to your wishlistget personalised recommendations check
								out more quickly track your orders register
							</p>
							<Button color="success" className="mt-4 py-2 text-uppercase">
								<Link to="/register" className="text-light">
									Create account
								</Link>
							</Button>
						</Col>
					</Row>
				</Container>
			</section>
		</Title>
	);
};

export default Login;
