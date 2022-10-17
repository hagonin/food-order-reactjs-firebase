import { useDispatch } from 'react-redux';
import { ListGroupItem } from 'reactstrap';
import { CartQuantity } from './CartQuantity';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

import '../../../globalstyles/cart-item.css';

export default function CartItem({ item }) {
	const { id, title, price, image01, quantity, totalPrice } = item;

	const dispatch = useDispatch();

	const incrementItem = () => {
		dispatch(
			cartActions.addItem({
				id,
				title,
				price,
				image01,
			})
		);
	};

	const decreaseItem = () => {
		dispatch(cartActions.removeItem(id));
	};

	const deleteItem = () => {
		dispatch(cartActions.deleteItem(id));
	};

	return (
		<ListGroupItem className="border-0 cart__item">
			<div className="cart__item-info d-flex gap-2">
				<img src={image01} alt="product-img" />

				<div className="cart__product-info w-100 d-flex align-items-center gap-2 justify-content-between">
					<div>
						<h6 className="cart__product-title">{title}</h6>
						<p className=" d-flex align-items-center gap-4 cart__product-price">
							{quantity} x<span>£{totalPrice}.00</span>
						</p>
						<CartQuantity incrementItem={incrementItem} quantity={quantity} decreaseItem={decreaseItem}  />
						
					</div>

					<span className="delete__btn" onClick={deleteItem}>
						<i className="ri-close-line"></i>
					</span>
				</div>
			</div>
		</ListGroupItem>
	);
}
