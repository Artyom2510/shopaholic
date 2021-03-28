import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { increment } from '../../reducers/basketSlice';

import './index.scss';

const TableRow = ({
	imgUrl,
	naming,
	type,
	price,
	id,
	totalCnt,
	deleteGood
}) => {
	const dispatch = useDispatch();
	const [count, setCount] = useState(1);
	const [total, setTotal] = useState(price);
	const inputRef = useRef(null);

	useEffect(() => {
		setTotal(count * price);
	}, [count, price]);

	const handleCnt = e => {
		let value = +e.target.value;
		if (value > inputRef.current.max) value = totalCnt;
		if (value < inputRef.current.min) value = 1;
		dispatch(increment(price * (value - count)));
		setCount(value);
	};

	const handleInc = quanity => {
		setCount(count + quanity);
		dispatch(increment(price * quanity));
	};

	let btnClassPlus = cn('btn-add', { 'btn-add_disabled': count === totalCnt });
	let btnClassMinus = cn('btn-add', { 'btn-add_disabled': count === 1 });

	return (
		<>
			<tr className='table-row'>
				<td className='table-row__col'>
					<div className='table-row__img-wrap'>
						<img src={imgUrl} alt={naming} />
						<span>{naming}</span>
						<span>{type}</span>
					</div>
				</td>
				<td className='table-row__col'>
					{`${price.toLocaleString('ru-RU')} `}₽
				</td>
				<td className='table-row__col'>
					<div className='table-row__cnt-wrap'>
						<button className={btnClassMinus} onClick={() => handleInc(-1)}>
							-
						</button>
						<input
							onInput={handleCnt}
							value={count}
							type='number'
							name={`${naming}${id}`}
							id={id}
							min='1'
							max={totalCnt}
							className='input-number'
							ref={inputRef}
						/>
						<button className={btnClassPlus} onClick={() => handleInc(+1)}>
							+
						</button>
					</div>
				</td>
				<td className='table-row__col'>
					{`${total.toLocaleString('ru-RU')} `}₽
				</td>
			</tr>
			<tr>
				<td className='table-delete-row'>
					<button className='btn-del' onClick={() => deleteGood(id, total)}>
						Удалить товар
					</button>
				</td>
			</tr>
		</>
	);
};

export default TableRow;
