import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/UI/common-section/CommonSection';
import Title from '../components/Title/Title';

import '../globalstyles/checkout.css';
import { useState } from 'react';

const Checkout = () => {
	const [enterName, setEnterName] = useState('');
	const [enterEmail, setEnterEmail] = useState('');
	const [enterNumber, setEnterNumber] = useState('');
	const [enterCountry, setEnterCountry] = useState('');
	const [enterCity, setEnterCity] = useState('');
	const [postalCode, setPostalCode] = useState('');

	const shippingInfo = [];
	const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
	const shippingCost = 5;

	const totalAmount = cartTotalAmount + Number(shippingCost);

	const submitHandler = (e) => {
		e.preventDefault();
		const userShippingAddress = {
			name: enterName,
			email: enterEmail,
			phone: enterNumber,
			country: enterCountry,
			city: enterCity,
			postalCode: postalCode,
		};

		shippingInfo.push(userShippingAddress);
		console.log(shippingInfo);
	};

	return (
		<Title title="Checkout">
			<CommonSection title="Checkout" />
			<section className='my-5'>
				<Container>
					<Row>
						<Col lg="8" md="6">
							<h6 className="mb-4">Shipping Address</h6>
							<form className="checkout__form" onSubmit={submitHandler}>
								<div className="form__group">
									<input
										type="text"
										placeholder="Enter your name"
										required
										onChange={(e) => setEnterName(e.target.value)}
									/>
								</div>

								<div className="form__group">
									<input
										type="email"
										placeholder="Enter your email"
										required
										onChange={(e) => setEnterEmail(e.target.value)}
									/>
								</div>
								<div className="form__group">
									<input
										type="number"
										placeholder="Phone number"
										required
										onChange={(e) => setEnterNumber(e.target.value)}
									/>
								</div>
								<div className="form__group">
									<input
										type="text"
										placeholder="Country"
										required
										onChange={(e) => setEnterCountry(e.target.value)}
									/>
								</div>
								<div className="form__group">
									<input
										type="text"
										placeholder="City"
										required
										onChange={(e) => setEnterCity(e.target.value)}
									/>
								</div>
								<div className="form__group">
									<input
										type="number"
										placeholder="Postal code"
										required
										onChange={(e) => setPostalCode(e.target.value)}
									/>
								</div>
								<button type="submit" className="addToCart__btn">
									Payment
								</button>
							</form>
						</Col>

						<Col lg="4" md="6">
							<div className="checkout__bill">
								<h6 className="d-flex align-items-center justify-content-between mb-3">
									Subtotal: <span>£{cartTotalAmount}.00</span>
								</h6>
								<h6 className="d-flex align-items-center justify-content-between mb-3">
									Shipping: <span>£{shippingCost}.00</span>
								</h6>
								<div className="checkout__total">
									<h5 className="d-flex align-items-center justify-content-between">
										Total: <span>£{totalAmount}.00</span>
									</h5>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Title>
	);
};

export default Checkout;
