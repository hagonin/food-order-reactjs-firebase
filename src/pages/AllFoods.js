import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactPaginate from 'react-paginate';

import Title from '../components/Title/Title';
import CommonSection from '../components/UI/common-section/CommonSection';
import ProductCard from '../components/UI/products/ProductCard';

import '../globalstyles/all-foods.css';
import '../globalstyles/pagination.css';
import { useSelector } from 'react-redux';

export default function AllFood() {
	const [searchTerm, setSearchTerm] = useState('');

	const [pageNumber, setPageNumber] = useState(0);

	const productsList = useSelector(state => state.products.products)


	const searchedProduct = productsList.filter((item) => {
		if (searchTerm.valueOf === '') {
			return item;
		}
		if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
			return item;
		} else {
			return console.log('not found');
		}
	});

	const productPerPage = 12;
	const visitedPage = pageNumber * productPerPage;
	const displayPage = searchedProduct.slice(
		visitedPage,
		visitedPage + productPerPage
	);

	const pageCount = Math.ceil(searchedProduct.length / productPerPage);

	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	return (
		<Title title="All-Food">
			<CommonSection title="All Foods" />
			<section  className='mb-5'>
				<Container>
					<Row>
						<Col lg="6" md="6" sm="6" xs="12">
							<div className="search__widget d-flex align-items-center justify-content-between ">
								<input
									type="text"
									placeholder="I'm looking for...."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
								/>
								<span>
									<i className="ri-search-line"></i>
								</span>
							</div>
						</Col>
						<Col lg="6" md="6" sm="6" xs="12" className="mb-5">
							<div className="sorting__widget text-end">
								<select className="w-50">
									<option>Default</option>
									<option value="ascending">Alphabetically, A-Z</option>
									<option value="descending">Alphabetically, Z-A</option>
									<option value="high-price">High Price</option>
									<option value="low-price">Low Price</option>
								</select>
							</div>
						</Col>
						{displayPage.map((item) => (
							<Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
								<ProductCard item={item} />
							</Col>
						))}
						<div>
							<ReactPaginate
								pageCount={pageCount}
								onPageChange={changePage}
								previousLabel={'Prev'}
								nextLabel={'Next'}
								containerClassName=" paginationBttns "
							/>
						</div>
					</Row>
				</Container>
			</section>
		</Title>
	);
}
