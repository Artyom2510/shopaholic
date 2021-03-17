import produce from 'immer';

import {
	LOGIN_BEGIN,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	SIGNUP_BEGIN,
	SIGNUP_SUCCESS,
	SIGNUP_ERROR,
	LOGOUT_SUCCESS,
	OPEN_MODAL,
	CLOSE_MODAL
} from '../actionTypes';

const initialState = {
	userData: null,
	saveInProgress: false,
	error: null,
	isModalOpen: false
};

const reducer = produce((draft, action) => {
	switch (action.type) {
		case LOGIN_BEGIN:
		case SIGNUP_BEGIN:
			draft.saveInProgress = true;
			draft.error = null;
			return;
		case LOGIN_SUCCESS:
		case SIGNUP_SUCCESS:
			draft.saveInProgress = false;
			draft.userData = action.payload;
			draft.isModalOpen = false;
			return;
		case LOGIN_ERROR:
		case SIGNUP_ERROR:
			draft.saveInProgress = false;
			draft.error = action.error;
			draft.userData = null;
			return;
		case LOGOUT_SUCCESS:
			draft.saveInProgress = false;
			draft.error = null;
			draft.userData = null;
			return;
		case OPEN_MODAL:
			draft.isModalOpen = true;
			return;
		case CLOSE_MODAL:
			draft.isModalOpen = false;
			draft.error = null;
			return;
		default:
			return;
	}
}, initialState);

export default reducer;
