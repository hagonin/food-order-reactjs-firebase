import Slider from 'react-slick';

import '../../../globalstyles/slider.css'

import ava01 from '../../../assets/images/avatar-1.png';
import ava02 from '../../../assets/images/avatar-2.png';
import ava03 from '../../../assets/images/avatar-3.png';
import ava04 from '../../../assets/images/avatar-4.png';

export default function TestimonialSlider() {
	const settings = {
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		swipeToSlide: true,
		slidesToShow: 1,
		infinite: true,
	};

	const reviewClient = [
		{
			userName: 'John doe',
			comment:
				"I have nothing but good things to say about Healthy Food I've had a few issues, with courriers delivering to the wrong address, missing items, and food prepared incorrectly, but these are not the fault of this company ",
			image: ava01,
		},
		{
			userName: 'Mitchell Marsh',
			comment:
				"Food arrived as indicated on the website. There was an issue with our order - not the delivery driver's fault - got someone else's drinks but not our own. Customer services sorted quickly. Well done!",
			image: ava02,
		},
		{
			userName: 'Lila Marshal',
			comment:
				'I was craving Junk food but healthy option so I ordered from Hola healthy options . The most delicious healthy deserts I ever had and it came just in time . I’ll definitely order again !',
			image: ava03,
		},
		{
			userName: 'Steven Crock',
			comment:
				"I'm a regular their client. The Healthy Food experience is quite simply phenomenal ! From start to finish every single order delivery is flawless. Even during the historic heatwave food delivered quickly. And the drivers are friendly and polite. A very enjoyable experience!",
			image: ava04,
		},
	];
	return (
		<Slider {...settings}>
			{reviewClient.map((user,index) => (
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
