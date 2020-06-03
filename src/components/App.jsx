import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Login from './Login';
import Users from './Users';
import PaymentForm from './PaymentForm';
import Dashboard from './Dashboard';
import api from '../services/api';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
});

function App() {
	const classes = useStyles();
	const [users, setUsers] = useState([]);
	const [userName, setUserName] = useState(undefined);
	const [userBalance, setUserBalance] = useState(undefined);
	const [userPayments, setUserPayments] = useState(undefined);

	useEffect(() => {
		api.getUsersMinInfo().then((response) => setUsers(response.data));
	}, []);

	async function handleLoginClick(event, name, redirectCb) {
		event.preventDefault();
		let response = await api.postLogin(name);
		setUserName(response.data.user.name);
		setUserBalance(response.data.user.balance);
		setUserPayments(response.data.user.payments);
		api.setToken(response.data.token);

		response = await api.getUsersMinInfo();
		setUsers(response.data);

		redirectCb();
	}

	function handleLogoutClick(redirectCb) {
		setUserName(undefined);
		api.removeToken();
		redirectCb();
	}

	async function handlePayClick(event, name, amount) {
		event.preventDefault();

		const transaction = { to: name, amount };
		let response = await api.postMakePayment(transaction);
		setUserBalance(response.data.balance);
		setUserPayments(response.data.payments);

		response = await api.getUsersMinInfo();
		setUsers(response.data);
	}

	return (
		<BrowserRouter>
			<div className={classes.root}>
				<Header name={userName} balance={userBalance} handleLogoutClick={handleLogoutClick} />
				<Switch>
					<Route exact path="/login">
						<Login handleSubmit={handleLoginClick} />
					</Route>
					<Route exact path="/dashboard">
						{userName
							? <Dashboard payments={userPayments} />
							: <Redirect to="/login" />}
					</Route>
					<Route path="/">
						{userName
							&& <PaymentForm handleSubmit={handlePayClick} userName={userName} />}
						<Users users={users} />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
