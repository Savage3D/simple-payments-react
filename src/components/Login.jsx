import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { checkName } from '../services/validators';

const usestyles = makeStyles({
	root: {
		marginTop: '40px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%',
		marginTop: '8px',
	},
	submit: { margin: '16px 0' },
});

function Login(props) {
	const classes = usestyles();
	const history = useHistory();
	const { handleSubmit } = props;
	const [name, setName] = useState('');

	return (
		<Container maxWidth="xs">
			<div className={classes.root}>
				<Typography variant="h5">
					Log in
				</Typography>
				<form
					className={classes.form}
					noValidate
					onSubmit={(event) => handleSubmit(event, name, () => history.push('/'))}
				>
					<TextField
						error={Boolean(checkName(name))}
						helperText={checkName(name)}
						id="name"
						name="name"
						label="Name"
						value={name}
						variant="outlined"
						margin="normal"
						required
						fullWidth
						autoFocus
						onChange={(e) => setName(e.target.value)}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						disabled={Boolean(checkName(name))}
						className={classes.submit}
					>
						Log in
					</Button>
				</form>
			</div>
		</Container>
	);
}

Login.propTypes = { handleSubmit: PropTypes.func.isRequired };

export default Login;
