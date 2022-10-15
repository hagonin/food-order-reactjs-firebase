import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import '../../../globalstyles/product-card.css';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

export default function ProductCard(props) {
	const { id, title, price, image01 } = props.item;

	const dispatch = useDispatch();
	const addToCart = () => {
		dispatch(
			cartActions.addItem({
				id,
				title,
				image01,
				price,
			})
		);
	};
	return (
		// <div className="product__item">
		// 	<div className="product__img">
		// 		<img src={image01} alt="product-img" className="" />
		// 	</div>
		// 	<div className="product__content">
		// 		<h5>
		// 			<Link to={`/foods/${id}`}>{title}</Link>
		// 		</h5>
		// 		<div className='d-flex align-items-center justify-content-between'>
		// 			<span className="product__price">£{price}.00</span>
		// 			<button className="addToCart__btn" onClick={addToCart}>Add to Cart</button>
		// 		</div>
		// 	</div>
		// </div>

		<Card className="product__item">
			<img className="product__img" alt="product-img" src={image01} />
			<CardBody>
				<CardTitle tag="h5" className='product__content'>
					<Link to={`/foods/${id}`}>{title}</Link>
				</CardTitle>
				<CardText>
					Some quick example text to build on the card title and make up the
					bulk of the card‘s content.
				</CardText>
				<div className="d-flex align-items-center justify-content-between">
					<span className="product__price">£{price}.00</span>
					<button className="addToCart__btn" onClick={addToCart}>
						Add to Cart
					</button>
				</div>
			</CardBody>
		</Card>
	);
}
