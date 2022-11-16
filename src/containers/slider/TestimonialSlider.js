import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axiosClient from '../../api/apiAxios';

import '../../globalstyles/slider.css';

export default function TestimonialSlider() {
	const settings = {
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		swipeToSlide: true,
		slidesToShow: 1,
		infinite: true,
	};

	const [reviewClient, setReviewClient] = useState([]);
	useEffect(() => {
		const getReview = async () => {
			try {
				const res = await axiosClient.get('reviewClient');
				setReviewClient(res);
			} catch (err) {
				console.log('Error getting prodcuts failed:', err.message);
			}
		};
		getReview();
	}, []);

	return (
		<Slider {...settings}>
			{reviewClient.map((user, index) => (
				<div key={user.index}>
					<p className="review__text">{user.comment}</p>
					<div className=" slider__content d-flex align-items-center gap-3 ">
						<img src={user.image} alt="avatar" className=" rounded" />
						<h6>{user.userName}</h6>
					</div>
				</div>
			))}
		</Slider>
	);
}
