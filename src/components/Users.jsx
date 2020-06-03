import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	root: {
		width: '300px',
		marginTop: '16px',
	},
});

function Users(props) {
	const { users } = props;
	const classes = useStyles();
	return (
		<Paper elevation={3} className={classes.root}>
			<List component="nav">
				{users.map((u) => (
					<ListItem button divider key={u.name}>
						<ListItemText primary={`${u.name}: $${u.balance}`} />
					</ListItem>
				))}
			</List>
		</Paper>
	);
}

Users.propTypes = {
	users: PropTypes.arrayOf(PropTypes.shape({
		_id: PropTypes.string,
		name: PropTypes.string,
		balance: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	})).isRequired,
};

export default Users;
