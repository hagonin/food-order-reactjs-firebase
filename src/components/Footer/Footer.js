import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/logo.png';
import '../../globalstyles/footer.css';

export default function Footer() {
	return (
		<footer className="footer">
			<Container>
				<Row>
					<Col lg="3" md="4" sm="6">
						<div className="footer__logo text-start">
							<img src={logo} alt="logo" />
							<h5>Healthy Food</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nesciunt pariatur accusamus
							</p>
						</div>
					</Col>
					<Col lg="3" md="4" sm="6">
						<h5 className="footer__title">Delivery Time</h5>
						<ListGroup className="delivery__time-list">
							<ListGroupItem className="delivery__time-item border-0 ps-0">
								<span>Monday - Friday</span>
								<p>10:00am - 11:00pm</p>
							</ListGroupItem>
							<ListGroupItem className="delivery__time-item border-0 ps-0">
								<span>Saturday - Sunday</span>
								<p>Off day</p>
							</ListGroupItem>
						</ListGroup>
					</Col>
					<Col lg="3" md="4" sm="6">
						<h5 className="footer__title">Contact</h5>
						<ListGroup className="delivery__time-list">
							<ListGroupItem className="delivery__time-item border-0 ps-0">
								<p>Location: 23b Elizabeth road, GR3 2F3, UK</p>
							</ListGroupItem>
							<ListGroupItem className="delivery__time-item border-0 ps-0">
								<p>Phone: 07 32 12 45 943</p>
							</ListGroupItem>
							<ListGroupItem className="delivery__time-item border-0 ps-0">
								<p>Email: healthyfooduk@gmail.com</p>
							</ListGroupItem>
						</ListGroup>
					</Col>
					<Col lg="3" md="4" sm="6">
						<h5 className="footer__title">Newsletter</h5>
						<p>Subscribe our newsletter</p>
						<div className="newsletter">
							<input type="text" placeholder="Enter your email" />
							<span>
								<i className="ri-send-plane-fill"></i>
							</span>
						</div>
					</Col>
				</Row>
				<Row className="mt-5">
					<Col lg="6" md="6">
						<p className="copyright__text">
							Copyright - 2022 website made by SarahP. All right reserved.
						</p>
					</Col>
					<Col lg="6" md="6">
						<div className="social__links d-flex align-items-center gap-4 justify-content-end">
							<p className="m-0">Follow:</p>
							<span>
								<Link to="https://github.com/hagonin">
									<i className="ri-github-fill"></i>
								</Link>
							</span>
							<span>
								<Link to="https://github.com/hagonin">
									<i className="ri-twitter-fill"></i>
								</Link>
							</span>
							<span>
								<Link to="https://github.com/hagonin">
									<i className="ri-codepen-fill"></i>
								</Link>
							</span>
							<span>
								<Link to="https://github.com/hagonin">
									<i className="ri-linkedin-fill"></i>
								</Link>
							</span>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
