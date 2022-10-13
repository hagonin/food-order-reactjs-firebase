import { useRef } from 'react';
import Title from '../components/Title/Title';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Register = () => {
	const signupFirstNameRef = useRef();
	const signupLastNameRef = useRef();
	const signupEmailRef = useRef();
	const signupPasswordRef = useRef();
	const signupConfirmPasswordRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();

		const enteredFirstName = signupFirstNameRef.current.value;
		const enteredLastName = signupLastNameRef.current.value;
		const enteredEmail = signupEmailRef.current.value;
		const enteredPassword = signupPasswordRef.current.value;
		const enteredConfirmPassword = signupConfirmPasswordRef.current.value;

		fetch(
			'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDI3asXL7nJIx1Aio1Y_dgOfj-Xpw3zXJY',
			{
				method: 'POST',
				body: JSON.stringify({
					firstName: enteredFirstName,
					lastName: enteredLastName,
					email: enteredEmail,
					password: enteredPassword,
					confirmPassword: enteredConfirmPassword,
					returnSecureToken: true,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		).then((res) => {
			if (res.ok) {
			} else {
				res.json().then((data) => {
					let errorMessage = 'Authentication failed!';
					if (data && data.error && data.error.message) {
						errorMessage = data.error.message;
					}
					alert(errorMessage)
				});
			}
		});
	};

	return (
		<Title title="Signup">
			<CommonSection title="Register Your Account" />
			<section className="my-3">
				<Container>
					<Row>
						<Col lg="6" md="6" sm="12" className="m-auto text-center">
							<form className="form mb-5" onSubmit={submitHandler}>
								<div className="form__group">
									<input
										type="text"
										placeholder="First name"
										required
										ref={signupFirstNameRef}
									/>
								</div>
								<div className="form__group">
									<input
										type="text"
										placeholder="Last name"
										required
										ref={signupLastNameRef}
									/>
								</div>
								<div className="form__group">
									<input
										type="email"
										placeholder="Email"
										required
										ref={signupEmailRef}
									/>
								</div>
								<div className="form__group">
									<input
										type="password"
										placeholder="Password"
										required
										ref={signupPasswordRef}
									/>
								</div>
								<div className="form__group">
									<input
										type="password"
										placeholder="Confirm Password"
										required
										ref={signupConfirmPasswordRef}
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
