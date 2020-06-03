import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { checkName, checkAmount, compareNames } from '../services/validators';

const useStyles = makeStyles({
	root: { margin: '16px 0' },
	form: {
		width: '100%',
		margin: '16px 0px',
		display: 'flex',
		alignItems: 'flex-start',
		'& > *': { margin: '0px 8px' },
	},
	submit: { width: '150px' },
});

function PaymentForm(props) {
	const classes = useStyles();
	const { handleSubmit, userName } = props;
	const [name, setName] = useState('');
	const [amount, setAmount] = useState('');

	return (
		<Paper elevation={3} className={classes.root}>
			<Container maxWidth="sm">
				<form
					noValidate
					className={classes.form}
					onSubmit={(event) => handleSubmit(event, name, amount)}
				>
					<TextField
						error={Boolean(checkName(name) || compareNames(userName, name))}
						helperText={`${checkName(name)} ${compareNames(userName, name)}`}
						id="name"
						name="name"
						label="Name"
						value={name}
						variant="outlined"
						margin="normal"
						required
						fullWidth
						onChange={(event) => setName(event.target.value)}
					/>
					<TextField
						error={Boolean(checkAmount(amount))}
						helperText={checkAmount(amount)}
						id="amount"
						name="amount"
						label="Amount"
						value={amount}
						variant="outlined"
						margin="normal"
						required
						fullWidth
						onChange={(e) => setAmount(e.target.value)}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						size="large"
						className={classes.submit}
						disabled={Boolean(
							checkName(name)
							|| compareNames(userName, name)
							|| checkAmount(amount),
						)}
					>
						Pay
					</Button>
				</form>
			</Container>
		</Paper>
	);
}

PaymentForm.propTypes = {
	userName: PropTypes.string.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};

export default PaymentForm;
