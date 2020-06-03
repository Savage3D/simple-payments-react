import axios from 'axios';

const apiUrl = 'https://simple-payments-api.herokuapp.com';
let jwt = '';

function setToken(token) {
	jwt = token;
}

function removeToken() {
	jwt = '';
}

async function getUsersMinInfo() {
	return axios.get(`${apiUrl}/api/users/`);
}

async function postLogin(name) {
	return axios.post(`${apiUrl}/api/users/login`, { name });
}

async function postMakePayment(transaction) {
	return axios.post(
		`${apiUrl}/api/users/makepayment`,
		transaction, { headers: { authorization: `Bearer ${jwt}` } },
	);
}

export default {
	setToken,
	removeToken,
	getUsersMinInfo,
	postLogin,
	postMakePayment,
};
