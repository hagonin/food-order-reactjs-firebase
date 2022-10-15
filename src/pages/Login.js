import { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Title from '../components/Title/Title';
import CommonSection from '../components/UI/common-section/CommonSection';
import { reset, login } from '../store/auth/authSlice';
import Spinner from '../components/Spinner/Spinner';

const Login = () => {
	const loginNameRef = useRef();
	const loginPasswordRef = useRef();

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isError) {
			console.log("Error, try to find the solution!");;
		}

		if (isSuccess || user) {
			navigate('/home');
		}

		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const submitHandler = (e) => {
		e.preventDefault();

		const userData = {
			loginNameRef,
			loginPasswordRef,
		};

		dispatch(login(userData));
	};

	if (isLoading) {
		return <Spinner />;
	};

	return (
		<Title title="Login">
			<CommonSection title="Sign In" />
			<section className="my-3">
				<Container>
					<Row>
						<Col lg="6" md="6" sm="12" className="m-auto text-center">
							<form className="form mb-5" onSubmit={submitHandler}>
								<div className="form__group">
									<input
										type="email"
										placeholder="Email"
										required
										ref={loginNameRef}
									/>
								</div>
								<div className="form__group">
									<input
										type="password"
										placeholder="Password"
										required
										ref={loginPasswordRef}
									/>
								</div>
								<button
									type="submit"
									className="addToCart__btn px-4 text-uppercase"
								>
									Login
								</button>
							</form>
						</Col>
						<Col lg="6" md="6" sm="12" className="text-center mt-5">
							<h5>Don't have an account ?</h5>
							<p className="m-auto ">
								Add items to your wishlistget personalised recommendations check
								out more quickly track your orders register
							</p>
							<button className="addToCart__btn mt-4 py-3 text-uppercase">
								<Link to="/register">Create an account</Link>
							</button>
						</Col>
					</Row>
				</Container>
			</section>
		</Title>
	);
};

export default Login;
