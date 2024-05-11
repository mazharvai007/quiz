import SuccessImg from '../assets/images/success.png';
import classes from '../styles/Summery.module.css';

function Summary({ score, noq }) {
	return (
		<>
			<div className={classes.summary}>
				<div className={classes.point}>
					<p className={classes.score}>
						Your score is <br />
						{score} out of {noq * 5}
					</p>
				</div>

				<div className={classes.badge}>
					<img src={SuccessImg} alt="Success" />
				</div>
			</div>
		</>
	);
}

export default Summary;
