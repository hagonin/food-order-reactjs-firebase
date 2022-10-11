import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Router from '../../routes/Router';

import '../../globalstyles/main.css'

export default function Layout() {
	return (
		<div>
			<Header />
			<div className='main'>
				<Router />
			</div>
			<Footer />
		</div>
	);
}
