import { Link } from 'react-router-dom';
import '../../../globalstyles/product-card.css'

export default function ProductCard(props) {
	const { id, title, price, image01 } = props.item;
	return (
		<div className="product__item">
			<div className="product__img">
				<img src={image01} alt="product-img" className="" />
			</div>
			<div className="product__content">
				<h5>
					<Link to={`/foods/${id}`}>{title}</Link>
				</h5>
				<div className='d-flex align-items-center justify-content-between'>
					<span className="product__price">£{price}.00</span>
					<button className="addToCart__btn">Add to Cart</button>
				</div>
			</div>
		</div>
	);
}
