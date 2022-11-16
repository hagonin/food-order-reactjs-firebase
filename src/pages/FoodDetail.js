import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProductDetail, getProducts } from '../store/products/productSlice';

import Title from '../components/Title/Title';
import CommonSection from '../containers/common-section/CommonSection';
import { cartActions } from '../store/shopping-cart/cartSlice';
import Feedback from '../containers/feedback/Feedback';
import ProductCard from '../containers/products/ProductCard';
import { CartQuantity } from '../containers/cart/CartQuantity';

import '../globalstyles/product-detail.css';

export default function FoodDetail() {
	const [tab, setTab] = useState('desc');

	const { id } = useParams();
	const dispatch = useDispatch();

	const products = useSelector((state) => state.products.products);

	const product = useSelector((state) => state.products.selectedProduct);

	useEffect(() => {
		if (products.length === 0) {
			dispatch(getProducts());
		}
		dispatch(getProductDetail(id));
	}, []);

	const [previewImg, setPreviewImg] = useState(product.image01);

	const { title, price, category, desc, image01 } = product;

	const relatedProduct = products.filter((item) => category === item.category);

	let [quantity, setQuantity] = useState(1);

	const addItem = () => {
		dispatch(
			cartActions.addItem({
				id,
				title,
				price,
				image01,
				quantity,
			})
		);
	};
	const increaseItem = () => {
		setQuantity(++quantity);
	};
	const decreaseItem = () => {
		if (quantity > 1) {
			setQuantity(--quantity);
		} else {
			setQuantity(0);
		}
	};

	useEffect(() => {
		setPreviewImg(product.image01);
	}, [product]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [product]);

	return (
		<Title title="Product-details">
			<CommonSection title={title} />
			<section className="mt-5">
				<Container>
					<Row>
						<Col lg="2" md="2">
							<div className="product__images ">
								<div
									className="img__item mb-3"
									onClick={() => setPreviewImg(product.image01)}
								>
									<img src={product.image01} alt="" className="w-50" />
								</div>
								<div
									className="img__item mb-3"
									onClick={() => setPreviewImg(product.image02)}
								>
									<img src={product.image02} alt="" className="w-50" />
								</div>

								<div
									className="img__item"
									onClick={() => setPreviewImg(product.image03)}
								>
									<img src={product.image03} alt="" className="w-50" />
								</div>
							</div>
						</Col>

						<Col lg="4" md="4">
							<div className="product__main-img">
								<img src={previewImg} alt="" className="w-100" />
							</div>
						</Col>

						<Col lg="6" md="6">
							<div className="single__product-content">
								<h2 className="product__title mb-3">{title}</h2>
								<p className="product__price">
									Price: <span>£{price}.00</span>
								</p>
								<p className="category mb-5">
									Category: <span>{category}</span>
								</p>
								<div className="d-flex gap-2">
									<CartQuantity
										incrementItem={increaseItem}
										quantity={quantity}
										decreaseItem={decreaseItem}
									/>
									<button onClick={addItem} className="addToCart__btn">
										Add to Cart
									</button>
								</div>
							</div>
						</Col>

						<Col lg="12">
							<div className="tabs d-flex align-items-center gap-5 py-3">
								<h6
									className={` ${tab === 'desc' ? 'tab__active' : ''}`}
									onClick={() => setTab('desc')}
								>
									Description
								</h6>
								<h6
									className={` ${tab === 'rev' ? 'tab__active' : ''}`}
									onClick={() => setTab('rev')}
								>
									Review
								</h6>
							</div>

							{tab === 'desc' ? (
								<div className="tab__content">
									<p>{desc}</p>
								</div>
							) : (
								<Feedback />
							)}
						</Col>

						<Col lg="12" className="mb-5 mt-4">
							<h2 className="related__Product-title">You might also like</h2>
						</Col>

						{relatedProduct.map((item) => (
							<Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
								<ProductCard item={item} />
							</Col>
						))}
					</Row>
				</Container>
			</section>
		</Title>
	);
}
