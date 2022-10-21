import {
	Button,
	Col,
	Container,
	Form,
	FormGroup,
	Input,
	Label,
	List,
	Row,
} from 'reactstrap';
import Title from '../components/Title/Title';
import CommonSection from '../components/UI/common-section/CommonSection';

export default function Contact() {
	return (
		<Title title="Contact Us">
			<CommonSection title="Contact Us" />
			<Container>
				<Row className="my-5">
					<Col>
						<div>
							<h4 className="fw-bold text-success mb-4">HEALTHY FOOD</h4>
							<div className="mb-5 fst-italic">
								<h6>32 Victoria Avenue</h6>
								<h6>Nottingham, Nottinghamshire</h6>
								<h6>NG23 1GL, England</h6>
								<div className="mt-4">
									<h4 className="fst-normal">Openning Hours</h4>
									<h6>Monday - Saturday</h6>
									<h6>10am - 11pm or until sold out</h6>
									<h6>Closed on Sunday</h6>
								</div>
							</div>
						</div>
						<p className="fw-light">
							Our food is prepared fresh and when we run out, we run out. If you
							need any item on the menu, please call a day in advance and we
							will accommodate you. Phone orders are welcome!
						</p>
					</Col>
					<Col>
						<div>
							<iframe
								title="address"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19223.790497420352!2d-1.1704070000000353!3d52.966885500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c1ee58a1e87f%3A0x135f0b152028f13b!2sMcDonald&#39;s!5e0!3m2!1sen!2suk!4v1666301128354!5m2!1sen!2suk"
								width="600"
								height="450"
								allowfullscreen=""
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
								className="rounded-5"
							/>
						</div>
					</Col>
				</Row>
				<Row className="mx-5 mb-5">
					<h2 className="h1-responsive font-weight-bold text-center my-4 text-success text-uppercase ">
						Contact Us
					</h2>

					<p className="text-center w-responsive mx-auto mb-5 w-50">
						Do you have any questions? Please do not hesitate to contact us
						directly. Our team will come back to you within a matter of hours to
						help you.
					</p>
					<Col md="7" className="mb-5">
						<Form>
							<Row>
								<Col md="6">
									<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
										<Label for="name" className="mr-sm-2 fw-bold">
											Your name
										</Label>
										<Input type="text" name="name" id="name" />
									</FormGroup>
								</Col>
								<Col md="6">
									<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
										<Label for="email" className="mr-sm-2 fw-bold">
											Your email
										</Label>
										<Input type="email" name="email" id="email" />
									</FormGroup>
								</Col>
							</Row>
							<Row>
								<Col md="12">
									<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
										<Label for="subject" className="mr-sm-2 fw-bold">
											Subject
										</Label>
										<Input type="text" name="subject" id="subject" />
									</FormGroup>
								</Col>
								<Col md="12">
									<FormGroup>
										<Label for="message" className="mr-sm-2 fw-bold">
											Message
										</Label>
										<Input id="message" name="message" type="textarea" />
									</FormGroup>
								</Col>
							</Row>
						</Form>
						<Button color="success" className="px-4 py-2 text-uppercase mt-3">
							Send Your Message
						</Button>
					</Col>
					<Col></Col>
					<Col md="3" className="text-center">
						<List type="unstyled">
							<li>
								<i className="ri-road-map-fill fs-3"></i>
								<p>
									32 VICTORIA AVENUE NOTTINGHAM, NOTTINGHAMSHIRE NG23 1GL,
									ENGLAND
								</p>
							</li>

							<li>
								<i className="ri-phone-fill fs-3"></i>
								<p>+44 732 1245 943</p>
							</li>

							<li>
								<i className="ri-mail-fill fs-3"></i>
								<p>info@healthyfood.com</p>
							</li>
						</List>
					</Col>
				</Row>
			</Container>
		</Title>
	);
}
