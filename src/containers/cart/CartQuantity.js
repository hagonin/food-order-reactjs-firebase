export function CartQuantity({ incrementItem, quantity, decreaseItem }) {
	return (
		<div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
			<span className="decrease__btn" onClick={decreaseItem}>
				<i className="ri-subtract-line"></i>
			</span>
			<span className="mx-2">{quantity}</span>
			<span className="increase__btn" onClick={incrementItem}>
				<i className="ri-add-line"></i>
			</span>
		</div>
	);
}
