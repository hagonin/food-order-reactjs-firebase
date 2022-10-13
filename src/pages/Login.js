import { useRef } from 'react';
import Title from '../components/Title/Title';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Login = () => {
	const loginNameRef = useRef();
	const loginPasswordRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();
		const enteredEmail = loginNameRef.current.value;
		const enteredPassword = loginPasswordRef.current.value;
		fetch(
			'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDI3asXL7nJIx1Aio1Y_dgOfj-Xpw3zXJY',
			{
				method: 'POST',
				body: JSON.stringify({
					email: enteredEmail,
					password: enteredPassword,
					returnSecureToken: true,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					return res.json().then((data) => {
						let errorMessage = 'Authentication failed!';
						// if (data && data.error && data.error.message) {
						//   errorMessage = data.error.message;
						// }

						throw new Error(errorMessage);
					});
				}
			})
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				alert(err.message);
			});
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
