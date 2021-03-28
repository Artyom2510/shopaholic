import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/img/icon/logo.svg';

// import ExitSvg from './img/quiz.png';
// import ExitSvg from '../../assets/img/icon/exit.svg';

// import {modalOpen, logOut} from '../../store/actions';

import './index.scss';

const Header = () => {
	// const dispatch = useDispatch();

	// const currentUser = useSelector(({user: {userData}}) => userData);
	// const handleClick = () => {
	// 	return currentUser ? dispatch(logOut()) : dispatch(modalOpen());
	// };

	return (
		<header className='header'>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<div className='header__wrap'>
							{/* <button className='header__burger btn-burger btn-burger_close js-burger'>
				<div className='btn-burger__icon'>
					<span></span>
				</div>
			</button> */}
							<Link to='/' className='header__logo'>
								{/* <img
					src={require('../../assets/img/icon/logo.svg').default}
					alt='Pixonic'
				/> */}
								<Logo />
							</Link>
							<nav className='header__nav'>
								<ul className='header-nav'>
									{/* <li className='header-nav__item header-nav__item_active'>
						<Link to='#'>Главная</Link>
					</li> */}
									<li className='header-nav__item header-nav__item_active'>
										<Link to='/basket'>Корзина</Link>
									</li>
									<li className='header-nav__item header-nav__item_active'>
										<Link to='/liked'>Понравившиеся товары</Link>
									</li>
								</ul>
							</nav>
							<div className='header__login-block login-block'>
								<span className='login-block__user-name'>Александр</span>
								<button className='login-block__log-out'>
									<img
										src={require('../../assets/img/icon/exit.svg').default}
										alt='exit'
									/>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
