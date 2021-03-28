import React from 'react';
import cn from 'classnames';
import Button from "@material-ui/core/Button";

import styles from './index.module.scss';

import { ReactComponent as Like } from '../../assets/img/icon/like.svg';

const Card = ({
	imgUrl,
	naming,
	type,
	isLiked,
	price,
	toggleLike,
	id,
	className,
	handleBasked
}) => {
	let classItem = cn(className, styles.GoodsListItem, {
		[styles.GoodsListItem_liked]: isLiked
	});

	return (
		<li className={classItem}>
			<div className={styles.GoodsListItem__wrapImg}>
				<img src={imgUrl} alt={naming} className={styles.GoodsListItem__img} />
			</div>
			<span className={styles.GoodsListItem__badge}>{type}</span>
			{/* <button
				className={styles.GoodsListItem__like}
				onClick={() => {
					toggleLike(id);
				}}
			>
				<Like />
			</button> */}
			<Button
				className={styles.GoodsListItem__like}
				onClick={() => {
					toggleLike(id);
				}}>
				<Like />
			</Button>
			<div className={styles.GoodsListItem__footer}>
				<span className={styles.GoodsListItem__price}>
					{`${price.toLocaleString('ru-RU')} `}₽
				</span>
				<button
					className={cn(styles.GoodsListItem__add, styles.link)}
					onClick={() => handleBasked(id, 1, price)}
				>
					В корзину
				</button>
			</div>
		</li>
	);
};

export default Card;
