import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
	root: { margin: '16px 0' },
	list: {
		width: '100%',
		margin: '16px 0px',
	},
	back: { margin: '16px 0' },
});

function DashBoard(props) {
	const classes = useStyles();
	const { payments } = props;
	const history = useHistory();

	return (
		<Paper elevation={3} className={classes.root}>
			<Container maxWidth="md">
				<List component="nav" className={classes.list}>
					{payments.map((p) => {
						let str = p.value < 0 ? 'me' : p.agent;
						str += ` === ($${Math.abs(p.value)}) ==> `;
						str += p.value < 0 ? p.agent : 'me';

						return (
							<ListItem button divider key={`${p.agent}-${p.value}-${Math.random()}`}>
								<ListItemText primary={str} />
							</ListItem>
						);
					})}
				</List>
				<Button
					type="button"
					fullWidth
					variant="contained"
					color="primary"
					size="large"
					className={classes.back}
					onClick={() => history.push('/')}
				>
					Back
				</Button>
			</Container>
		</Paper>
	);
}

DashBoard.propTypes = {
	payments: PropTypes.arrayOf(PropTypes.shape({
		agent: PropTypes.string,
		value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	})),
};

DashBoard.defaultProps = { payments: undefined };

export default DashBoard;
