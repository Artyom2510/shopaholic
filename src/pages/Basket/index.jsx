import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TableRow from '../../components/TableRow';

import { selectBasket, removeFromBasked } from '../../reducers/basketSlice';
import { selectGoods } from '../../reducers/goodsSlice';

import './index.scss';

const Basket = () => {
	const dispatch = useDispatch();
	const basket = useSelector(selectBasket);
	const goods = useSelector(selectGoods);
	const [goodsRender, setGoodsRender] = useState([]);

	const deleteGood = (id, price) => {
		dispatch(removeFromBasked(id, price));
	};

	useEffect(() => {
		setGoodsRender(Object.keys(basket.data).map(key => goods.data[key]));
	}, [basket.data, goods.data]);

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-12'>
					<h1>Корзина</h1>
					{!goodsRender.length ? (
						<p>Корзина Пуста</p>
					) : (
						<>
							<table className='basket-table'>
								<thead className='basket-table__head table-head'>
									<tr>
										<th className='table-head__name'>Товар</th>
										<th className='table-head__name'>Цена</th>
										<th className='table-head__name'>Количество</th>
										<th className='table-head__name'>Сумма</th>
									</tr>
								</thead>
								<tbody>
									{goodsRender.map(item => {
										return (
											<TableRow
												key={item.id}
												{...item}
												deleteGood={deleteGood}
											/>
										);
									})}
								</tbody>
							</table>
							<div className='basket-footer'>
								<span className='basket-footer__total'>{`${basket.totalPrice.toLocaleString(
									'ru-RU'
								)} ₽`}</span>
								<button className='basket-footer__btn basket-order'>
									Оформить заказ
								</button>
								<button className='basket-footer__btn basket-order basket-order_reset'>
									Очистить корзину
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Basket;
