import axios from 'axios';

// class Api {
// 	_url = 'http://localhost:3004';

// 	getGoods = async () => {
// 		const res = await fetch(`${this._url}/response`);
// 		return await res.json();
// 	};

// 	patchLike = async (id, value) => {
// 		const res = await fetch(`${this._url}/response/${id}`, {
// 			method: 'PATCH',
// 			headers: {
// 				Accept: 'application/json'
// 				// 'Content-Type': 'application/json'
// 			},
// 			body: JSON.stringify({
// 				isLiked: value
// 			})
// 		});
// 		return await res.json();
// 	};
// }

// export default new Api();
const _apiBase = 'http://localhost:3004';

export const loadGoods = async () => {
	const result = await axios(`${_apiBase}/goods`);
	return result.data;
};
