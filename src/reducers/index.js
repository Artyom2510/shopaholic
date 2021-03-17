import { configureStore } from '@reduxjs/toolkit';

import goodsReducer from './goodsSlice';
import basketReducer from './basketSlice';

export default configureStore({
	reducer: {
		// user,
		basket: basketReducer,
		goods: goodsReducer
	}
	// devTools: false
});
