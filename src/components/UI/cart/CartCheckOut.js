import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

export default function CartCheckOut({item}) {
 const { id, image01, title, price, quantity } = item;
 const dispatch = useDispatch();

 const deleteItem = () => {
		dispatch(cartActions.deleteItem(id));
 };
 return (
		<tr>
			<td className="text-center cart__img-box">
				<img src={image01} alt="" />
			</td>
			<td className="text-center">{title}</td>
			<td className="text-center">£{price}.00</td>
			<td className="text-center">{quantity} unity</td>
			<td className="text-center cart__item-del">
				<i className="ri-delete-bin-line" onClick={deleteItem}></i>
			</td>
		</tr>
 );
}
