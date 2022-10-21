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
				quantity:1
			})
		);
	};
	return (
		<Card className="product__item">
			<img className="product__img" alt="product-img" src={image01} />
			<CardBody>
				<CardTitle tag="h5" className="product__content">
					<Link to={`/foods/${id}`}>{title}</Link>
				</CardTitle>
				<CardText>
					The art of modifying, processing, arranging, or decorating food to
					enhance its aesthetic appeal.
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
