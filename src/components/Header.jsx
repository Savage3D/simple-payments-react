import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		alignItems: 'center',
	},
	title: { flexGrow: 1 },
	ownerControls: {
		display: 'flex',
		alignItems: 'center',
	},
	balanceText: { marginRight: '30px' },
});

function Header(props) {
	const classes = useStyles();
	const { name, balance, handleLogoutClick } = props;
	const history = useHistory();

	return (
		<AppBar position="static">
			<ToolBar>
				<Container className={classes.root}>
					<Typography component={Link} to="/" variant="h5" className={classes.title}>
						Simple Payments
					</Typography>
					{!name
					&& (
						<Button component={Link} to="/login" color="inherit" size="large">
							Log in
						</Button>
					)}
					{name
					&& (
						<div className={classes.ownerControls}>
							<Typography variant="h6" className={classes.balanceText}>
								{`Hi, ${name}. Your balance is: $${balance}`}
							</Typography>
							<Button component={Link} to="/dashboard" color="inherit" size="large">
								Dashboard
							</Button>
							<Button
								color="inherit"
								size="large"
								onClick={() => handleLogoutClick(() => history.push('/'))}
							>
								Log out
							</Button>
						</div>
					)}
				</Container>
			</ToolBar>
		</AppBar>
	);
}

Header.propTypes = {
	name: PropTypes.string,
	balance: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	handleLogoutClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
	name: undefined,
	balance: undefined,
};

export default Header;
