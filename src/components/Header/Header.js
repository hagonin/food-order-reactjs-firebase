import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Container } from 'reactstrap';
import logo from '../../assets/images/logo.png';
import { cartUiActions } from '../../store/shopping-cart/cartUiSlice';
import '../../globalstyles/header.css';
import { authActions, logout } from '../../store/auth/authSlice';

const nav_link = [
	{ display: 'Home', path: '/home' },
	{ display: 'Foods', path: '/foods' },
	{ display: 'Cart', path: '/cart' },
	{ display: 'Contact', path: '/contact' },
];

export default function Header() {
	const navbarRef = useRef(null);
	const headerRef = useRef(null);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);

	const toggleNavbar = () => navbarRef.current.classList.toggle('show__navbar');

	const totalQuantity = useSelector((state) => state.cart.totalQuantity);

	const toggleCart = () => {
		dispatch(cartUiActions.toggle());
	};

	const onLogout = () => {
		dispatch(logout());
		dispatch(authActions.reset());
		navigate('/home');
	};

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (
				document.body.scrollTop > 80 ||
				document.documentElement.scrollTop > 80
			) {
				headerRef.current.classList.add('header__shrink');
			} else {
				headerRef.current.classList.remove('header__shrink');
			}
		});

		// return () => window.removeEventListener('scroll');
	}, []);

	return (
		<header className="header" ref={headerRef}>
			<Container>
				<div className="nav__wrapper d-flex align-items-center justify-content-between">
					<div className="logo">
						<Link to="/home">
							<img src={logo} alt="logo" />
							<h5>Healthy Food</h5>
						</Link>
					</div>

					{/* ======== navbar ========= */}
					<div className="navigation" ref={navbarRef} onClick={toggleNavbar}>
						<div className="navbar d-flex align-items-center gap-5 ">
							{nav_link.map((item, index) => (
								<NavLink
									to={item.path}
									key={index}
									className={(navItem) =>
										navItem.isActive ? 'active__navbar' : ''
									}
								>
									{item.display}
								</NavLink>
							))}
						</div>
					</div>

					{/* ======= nav right =======  */}
					<div className="nav__right d-flex align-items-center gap-3">
						<span className="cart__icon" onClick={toggleCart}>
							<i className="ri-shopping-basket-fill"></i>
							<span className="cart__badge">{totalQuantity}</span>
						</span>
						{user ? (
							<button className="user-logout" onClick={onLogout}>
								Logout
							</button>
						) : (
							<span className="user">
								<Link to="/login">
									<i className="ri-user-5-line"></i>
								</Link>
							</span>
						)}
						<span className="mobile__navbar" onClick={toggleNavbar}>
							<i className="ri-menu-2-line"></i>
						</span>
					</div>
				</div>
			</Container>
		</header>
	);
}
