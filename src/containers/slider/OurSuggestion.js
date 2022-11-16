import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Col } from 'reactstrap';
import axiosClient from '../../api/apiAxios';

import '../../globalstyles/slider.css';
import ProductCard from '../products/ProductCard';

export default function OurSuggestion() {
	const [preferredSalad, setPreferredSalad] = useState([]);

	useEffect(() => {
		getPreferredSalad();
		const sliceSalad = preferredSalad.slice(0, 4);
		setPreferredSalad(sliceSalad);
	}, []);

	const getPreferredSalad = async () => {
		try {
			const res = await axiosClient.get('/products');
			setPreferredSalad(res);
		} catch (err) {
			console.log('Error getting prodcuts failed:', err.message);
		}
	};

	const settings = {
		dots: true,
		infinite: true,
		speed: 100,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<Slider {...settings}>			
			{preferredSalad.map((item) => (
				<Col lg="3" md="4" sm="6" xs="6" key={item.id}>
					<ProductCard item={item} />
				</Col>
			))}
		</Slider>
	);
}
