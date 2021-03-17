import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectBasket } from '../../reducers/basketSlice';
import { selectGoods } from '../../reducers/goodsSlice';

import './index.scss';

const Basket = () => {
	const basket = useSelector(selectBasket);
	const goods = useSelector(selectGoods);
	let goodsRender = [];

	useEffect(() => {
		goodsRender = Object.keys(basket.data).map(key => goods.data[key]);
	}, [basket.data]);

	return (
		<>
			<h1>Basket</h1>
			<ul className='basket-list'>
				<li className='basket-list__item basket-list-item'></li>
			</ul>
		</>
	);
};

export default Basket;
