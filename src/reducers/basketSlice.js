import { createSlice } from '@reduxjs/toolkit';

const basketInitialState = {
	data: {},
	totalPrice: 0
};

export const slice = createSlice({
	name: 'basket',
	initialState: basketInitialState,
	reducers: {
		updateBasket: (state, { payload }) => {
			state.data[payload.id] = payload.cnt;
			state.totalPrice += payload.price;
		},
		removeGood: (state, { payload }) => {
			state.totalPrice -= payload.price;
			delete state.data[payload.id];
		},
		increment: (state, { payload }) => {
			state.totalPrice += payload;
		}
	}
});

const { updateBasket, removeGood } = slice.actions;

export const addToBasked = (id, cnt, price) => dispatch => {
	dispatch(updateBasket({ id, cnt, price }));
};

export const { increment } = slice.actions;

// export const selectCount = state => state.basket.price;

export const removeFromBasked = (id, price) => dispatch => {
	dispatch(removeGood({ id, price }));
};

export const selectBasket = state => state.basket;

export default slice.reducer;
