import { Container, Row, Col } from 'reactstrap';

import howitworksImg1 from '../../../assets/images/mobile.png';
import howitworksImg2 from '../../../assets/images/truck.png';
import howitworksImg3 from '../../../assets/images/heat.png';
import howitworksImg4 from '../../../assets/images/repeat.png';

import '../../../globalstyles/how-it-works.css';

const howItWorksData = [
	{ display: 'Choose', imgUrl: howitworksImg1 },
	{ display: 'Fast Delivery', imgUrl: howitworksImg2 },
	{ display: 'Heat & Eat', imgUrl: howitworksImg3 },
	{ display: 'Repeat', imgUrl: howitworksImg4 },
];

function HowItWorks() {
	return (
		<Container>
			<Row className='justify-content-center'>
				{howItWorksData.map((item, index) => (
					<Col lg="2" md="6" sx="6" className="mt-4" key={index}>
						<div className="howitworks__item d-flex align-items-center flex-column">
							<div className="howitworks__img">
								<img src={item.imgUrl} alt="howitworks-item" />
							</div>
							<p>{item.display}</p>
						</div>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default HowItWorks;
