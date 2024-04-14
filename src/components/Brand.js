import React from 'react';
import Logo from '../assets/images/logo.png';
import classes from '../styles/Brand.module.css';

function Brand() {
	return (
		<ul>
			<li>
				<a href="index.html" className={classes.brand}>
					<img src={Logo} alt="Quiz" />
					<h3>Quiz</h3>
				</a>
			</li>
		</ul>
	);
}

export default Brand;
