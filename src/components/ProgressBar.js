// import { Link } from 'react-router-dom';
import classes from '../styles/ProgressBar.module.css';
import Button from './Button';

function ProgressBar({ next, prev, percentage }) {
	return (
		<>
			<div className={classes.progressBar}>
				<div className={classes.backButton} onClick={prev}>
					<span className="material-icons-outlined">arrow_back</span>
				</div>
				<div className={classes.rangeArea}>
					<div className={classes.tooltip}>
						{percentage}% Complete!
					</div>
					<div className={classes.rangeBody}>
						<div
							className={classes.progress}
							style={{ width: `${percentage}%` }}
						></div>
					</div>
				</div>
				{/* <Link to="/result"> */}
				<Button className={classes.next} onClick={next}>
					<span>Next Question</span>
					<span className="material-icons-outlined">
						arrow_forward
					</span>
				</Button>
				{/* </Link> */}
			</div>
		</>
	);
}

export default ProgressBar;
