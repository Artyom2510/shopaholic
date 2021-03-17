import { createSlice } from '@reduxjs/toolkit';

import { loadGoods as loadGoodsApi } from '../api';

const goodsInitialState = {
	data: {},
	error: null,
	isLoading: false
};

export const slice = createSlice({
	name: 'goods',
	initialState: goodsInitialState,
	reducers: {
		getGoodsStart: state => {
			state.isLoading = true;
		},
		getGoodsSuccess: (state, { payload }) => {
			payload.forEach(good => {
				state.data[good.id] = { ...good };
			});
			state.isLoading = false;
			state.error = null;
		},
		getGoodsFailure: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload.error;
		},
		updateGood: (state, { payload }) => {
			state.data[payload].isLiked = !state.data[payload].isLiked;
		}
	}
});

const {
	getGoodsStart,
	getGoodsSuccess,
	getGoodsFailure,
	updateGood
} = slice.actions;

export const loadGoods = () => async dispatch => {
	dispatch(getGoodsStart());
	try {
		const data = await loadGoodsApi();
		dispatch(getGoodsSuccess(data));
	} catch (err) {
		dispatch(getGoodsFailure({ error: err.toString() }));
	}
};

export const likeGood = id => dispatch => {
	dispatch(updateGood(id));
};

export const selectGoods = state => state.goods;

export default slice.reducer;
