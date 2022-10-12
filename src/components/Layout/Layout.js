import { useSelector } from 'react-redux';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Carts from '../UI/cart/Cart'

import '../../globalstyles/main.css';

export default function Layout({ children }) {
	 const showCart = useSelector((state) => state.cartUi.cartIsVisible);
	return (
		<div className="main">
			<Header />
			{showCart && <Carts />}

			<main>{children}</main>

			<Footer />
		</div>
	);
}
