import React from 'react';
import {Link} from "react-router-dom";

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
	},
}));

export default function Header() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						React Template
					</Typography>

					<Link to='/'>
						<Button>Home</Button>
					</Link>

					<Link to='/login'>
						<Button>Login</Button>
					</Link>
				</Toolbar>
			</AppBar>
		</div>
	);
}
