import { createSlice } from '@reduxjs/toolkit';

const basketInitialState = {
	data: {}
};

export const slice = createSlice({
	name: 'basket',
	initialState: basketInitialState,
	reducers: {
		updateBasket: (state, { payload }) => {
			state.data[payload.id] = payload.cnt;
		}
	}
});

const { updateBasket } = slice.actions;

export const addToBasked = (id, cnt) => dispatch => {
	dispatch(updateBasket({ id, cnt }));
};

export const selectBasket = state => state.basket;

export default slice.reducer;
