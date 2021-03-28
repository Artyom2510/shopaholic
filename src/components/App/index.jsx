import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
// import Modal from 'react-modal';

import Header from '../Header';
import Home from '../../pages/Home';
import Basket from '../../pages/Basket';
import LikedGoods from '../../pages/LikedGoods';
// import LoginForm from './components/LoginForm';
// import News from './pages/News';
// import { modalClose } from './store/actions';
// import moment from 'moment';
// const locale = moment.locale('ru');

import './index.scss';

const App = () => {
	// const dispatch = useDispatch();
	// const isModalOpen = useSelector(({ user: { isModalOpen } }) => isModalOpen);

	return (
		<Router>
			<Header />
			<main className='main'>
				{/* <Modal
					isOpen={isModalOpen}
					onRequestClose={() => dispatch(modalClose())}
				>
					<LoginForm />
				</Modal> */}
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/basket' component={Basket} />
					<Route path='/liked' component={LikedGoods} />
					<Redirect from='*' to='/' />
				</Switch>
			</main>
		</Router>
	);
};

export default App;
