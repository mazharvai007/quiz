import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import classes from '../styles/Brand.module.css';

function Brand() {
	return (
		<ul>
			<li>
				<Link to="/" className={classes.brand}>
					<img src={Logo} alt="Quiz" />
					<h3>Quiz</h3>
				</Link>
			</li>
		</ul>
	);
}

export default Brand;
