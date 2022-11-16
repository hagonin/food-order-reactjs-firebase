import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import CartCheckOut from '../containers/cart/CartCheckOut';
import Title from '../components/Title/Title';
import CommonSection from '../containers/common-section/CommonSection';

import '../globalstyles/cart-page.css';

export default function Cart() {
   const cartItems = useSelector((state) => state.cart.cartItems);
		const totalAmount = useSelector((state) => state.cart.totalAmount);
	return (
		<Title>
			<CommonSection title="Your cart" />
			<section className='mt-5'>
				<Container>
					<Row>
						<Col lg="12">
							{cartItems.length === 0 ? (
								<h5 className="text-center">Your cart is empty</h5>
							) : (
								<table className="table table-bordered">
									<thead>
										<tr className='text-center'>
											<th>Product</th>
											<th>Title</th>
											<th>Price</th>
											<th>Quantity</th>
											<th>Delete</th>
										</tr>
									</thead>
									<tbody>
										{cartItems.map((item) => (
											<CartCheckOut item={item} key={item.id} />
										))}
									</tbody>
								</table>
							)}

							<div className="my-4">
								<h6>
									Subtotal: £
									<span className="cart__subtotal">{totalAmount}.00</span>
								</h6>
								<p>Taxes and shipping will calculate at checkout</p>
								<div className="cart__page-btn">
									<button className="addToCart__btn me-4">
										<Link to="/foods">Continue Shopping</Link>
									</button>
									<button className="addToCart__btn">
										<Link to="/checkout">Proceed to checkout</Link>
									</button>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Title>
	);
}
