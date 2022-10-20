import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroupItem, ListGroup } from 'reactstrap';

import Title from '../components/Title/Title';
import imgHero from '../assets/images/hero.jpg';
import Feature from '../components/UI/feature/feature';
import HowItWorks from '../components/UI/how-it-works/HowItWorks';

import '../globalstyles/hero-section.css';
import '../globalstyles/home.css';

import ProductCard from '../components/UI/products/ProductCard';
import foodCategoryImg01 from '../assets/images/salad.png';
import foodCategoryImg02 from '../assets/images/meat.png';
import foodCategoryImg03 from '../assets/images/pasta.png';

import quality from '../assets/images/quality-food.jpg';
import network from '../assets/images/social-network.jpg';
import TestimonialSlider from '../components/UI/slider/TestimonialSlider';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, productActions } from '../store/products/productSlice';

export default function Home() {
	const [category, setCategory] = useState('ALL');

	const allProducts = useSelector((state) => state.products.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());

	}, []);
	
	const filteredProducts = useSelector((state) => state.products.filterProduct);

	return (
		<Title title="Home">
			<section>
				<Container>
					<Row>
						<Col lg="6" md="6">
							<div className="hero__content d-flex align-items-center justify-content-center flex-column">
								<p className="mb-3">
									Makes it easy and enjoyable to eat well and feel great
								</p>
								<h1 className="mb-4 hero__title d-flex flex-column gap-2">
									MEALS THAT GET YOU <span>HEALTHY & FIT</span>
								</h1>
								<p>Change Your Lifestyles For The Better</p>
								<div className="hero__btns d-flex align-items-center gap-5 mt-4">
									<button className="order__btn">Get Started Today</button>
									<button className="all__foods-btn">
										<Link to="/foods">See Our Menu</Link>
									</button>
								</div>
							</div>
						</Col>
						<Col lg="6" md="6">
							<div className="hero__img">
								<img src={imgHero} alt="img-hero" className="w-100" />
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="pt-0">
				<HowItWorks />
			</section>
			<section>
				<Feature />
			</section>
			<section>
				<Container>
					<Row>
						<Col lg="12" className="text-center menu">
							<h2>Our Menu</h2>
						</Col>
						<Col lg="12">
							<div className="food__category d-flex align-items-center justify-content-center gap-4">
								<button
									className={`all__btn ${
										category === 'ALL' ? 'foodBtnActive' : ''
									}`}
									onClick={() =>
										dispatch(productActions.filterProductCategory('ALL'))
									}
								>
									All
								</button>
								<button
									className={`d-flex align-items-center gap-2 ${
										category === 'SALAD' ? 'foodBtnActive' : ''
									} `}
									onClick={() =>
										dispatch(productActions.filterProductCategory('SALAD'))
									}
								>
									<img src={foodCategoryImg01} alt="category-img" />
									Salad
								</button>
								<button
									className={`d-flex align-items-center gap-2 ${
										category === 'MEAT' ? 'foodBtnActive' : ''
									} `}
									onClick={() =>
										dispatch(productActions.filterProductCategory('MEAT'))
									}
								>
									<img src={foodCategoryImg02} alt="category-img" />
									Meat
								</button>
								<button
									className={`d-flex align-items-center gap-2 ${
										category === 'PASTA' ? 'foodBtnActive' : ''
									} `}
									onClick={() =>
										dispatch(productActions.filterProductCategory('PASTA'))
									}
								>
									<img src={foodCategoryImg03} alt="category-img" />
									Pasta
								</button>
							</div>
						</Col>
						{filteredProducts.map((item) => (
							<Col lg="3" md="4" xs="6" key={item.id} className="mt-5">
								<ProductCard item={item} />
							</Col>
						))}
					</Row>
				</Container>
			</section>
			<section className="quality-foods">
				<Container>
					<Row>
						<Col lg="6" md="6">
							<img src={quality} alt="quality-food" className="quality" />
						</Col>

						<Col lg="6" md="6">
							<div className="quality__food">
								<h2 className="quality__food-title mb-4">
									Only <span>quality products</span>
								</h2>
								<p className="quality__food-desc">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Dolorum, minus. Tempora reprehenderit a corporis velit,
									laboriosam vitae ullam, repellat illo sequi odio esse iste
									fugiat dolor, optio incidunt eligendi deleniti!
								</p>

								<ListGroup className="mt-4">
									<ListGroupItem className="border-0 ps-0">
										<p className=" choose__us-title d-flex align-items-center gap-2 ">
											<i className="ri-checkbox-circle-line"></i> Fasting
										</p>
										<p className="choose__us-desc">
											Lorem ipsum, dolor sit amet consectetur adipisicing elit.
											Quia, voluptatibus.
										</p>
									</ListGroupItem>

									<ListGroupItem className="border-0 ps-0">
										<p className="choose__us-title d-flex align-items-center gap-2 ">
											<i className="ri-checkbox-circle-line"></i> Vegetarians
											and vegans
										</p>
										<p className="choose__us-desc">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Qui, earum.
										</p>
									</ListGroupItem>

									<ListGroupItem className="border-0 ps-0">
										<p className="choose__us-title d-flex align-items-center gap-2 ">
											<i className="ri-checkbox-circle-line"></i>Athletes and
											those who lead an active lifestyle
										</p>
										<p className="choose__us-desc">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Qui, earum.
										</p>
									</ListGroupItem>
								</ListGroup>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section>
				<Container className="mt-5">
					<Row>
						<Col lg="6" md="6">
							<div className="testimonial ">
								<p className="testimonial__subtitle">"</p>
								<h2 className="testimonial__title mb-4">
									What our <span>food lovers</span> said
								</h2>
								<p className="testimonial__desc">
									Ordering food online is quick and easy. It really is that
									simple. Quite obviously, you could select and order your meals
									while relaxing on the couch in your pyjamas, if you really
									wanted to.
								</p>
								<TestimonialSlider />
							</div>
						</Col>

						<Col lg="6" md="6">
							<img
								src={network}
								alt="testimonial-img"
								className="testimonial__img"
							/>
						</Col>
					</Row>
				</Container>
			</section>
		</Title>
	);
}
