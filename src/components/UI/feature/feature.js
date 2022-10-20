import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import axiosClient from '../../../api/apiAxios';

export default function Feature() {
	const [loadedFeature, setLoadedFeature] = useState([]);
	useEffect(() => {
		const getFeature = async () => {
			try {
				const res = await axiosClient.get('featureData');
				setLoadedFeature(res);
			} catch (err) {
				console.log('Error getting prodcuts failed:', err.message);
			}
		};
		getFeature();
	}, []);
	return (
		<Container>
			<Row>
				<Col lg="12" className="text-center mt-5">
					<h5 className="feature__subtitle mb-4">What we serve</h5>
					<h2 className="feature__title">Just sit back at home</h2>
					<h2 className="feature__title">
						we will <span>take care</span>
					</h2>
					<p className="mb-1 mt-4 feature__text">
						Enjoy delicious, satisfying helthy meals you can make with everyday
						ingredients - no weighing, no measuring and no counting calories. We
						will deliver you an amazing meal of your life.
					</p>
					<p className="feature__text mt-3">
						The best healthy food let you order whatever you want to eat with
						just the click of a button. No need to dine in or even drive
						anywhere to pick up the meal.
					</p>
				</Col>
				{loadedFeature.map((item, index) => (
					<Col lg="4" md="6" sm="12" key={index} className="mt-5">
						<div className="feature__item text-center">
							<img src={item.imgUrl} alt="feature-img" className="w-25 mb-3" />
							<h5 className="fw-bold mb-3">{item.title}</h5>
							<p>{item.desc}</p>
						</div>
					</Col>
				))}
			</Row>
		</Container>
	);
}
