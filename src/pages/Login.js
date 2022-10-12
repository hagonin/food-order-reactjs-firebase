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
	};

	return (
		<Title title="Login">
			<CommonSection title="Login" />
			<section className='my-3'>
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
								<button type="submit" className="addToCart__btn">
									Login
								</button>
							</form>
							<Link to="/register">
								Don't have an account? Create an account
							</Link>
						</Col>
					</Row>
				</Container>
			</section>
		</Title>
	);
};

export default Login;
