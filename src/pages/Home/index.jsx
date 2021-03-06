import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/Card';
import { loadGoods, selectGoods, likeGood } from '../../reducers/goodsSlice';
import { addToBasked } from '../../reducers/basketSlice';

import './index.scss';

const Home = () => {
	const dispatch = useDispatch();
	const goods = useSelector(selectGoods);

	useEffect(() => {
		dispatch(loadGoods());
	}, []);

	const toggleLike = id => {
		dispatch(likeGood(id));
	};

	const handleBasked = (id, cnt, price) => {
		dispatch(addToBasked(id, cnt, price));
	};

	return (
		<section className='goods'>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<h1>Hello User</h1>
						{goods.isLoading ? (
							<p>Загрузка...</p>
						) : Object.keys(goods.data).length ? (
							<>
								<h3>Покупай-налетай</h3>
								<ul className='goods__list goods-list'>
									{Object.keys(goods.data).map(key => {
										return (
											<Card
												className='goods-list__item'
												key={key}
												toggleLike={toggleLike}
												handleBasked={handleBasked}
												{...goods.data[key]}
											/>
										);
									})}
								</ul>
							</>
						) : (
							<h3>Товаров нет</h3>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
