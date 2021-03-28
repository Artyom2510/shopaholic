import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/Card';
import { selectGoods, likeGood } from '../../reducers/goodsSlice';
import { addToBasked } from '../../reducers/basketSlice';

import './index.scss';

const LikeGoods = () => {
	const dispatch = useDispatch();
	const goods = useSelector(selectGoods);

	const [goodsLikedRender, setGoodsLikedRender] = useState([]);

	useMemo(() => {
		setGoodsLikedRender(
			Object.keys(goods.data)
				.map(good => goods.data[good])
				.filter(good => good.isLiked)
		);
	}, [goods.data]);

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
						) : goodsLikedRender.length ? (
							<>
								<h3>Понравившиеся товары</h3>
								<ul className='goods__list goods-list'>
									{goodsLikedRender.map(item => {
										return (
											<Card
												className='goods-list__item'
												key={item.id}
												toggleLike={toggleLike}
												handleBasked={handleBasked}
												{...item}
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

export default LikeGoods;
