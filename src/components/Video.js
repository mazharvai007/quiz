import { Link } from 'react-router-dom';
import CourseImg from '../assets/images/reactcourse.png';
import classes from '../styles/Video.module.css';

export default function Video() {
	return (
		<>
			<Link to="/quiz">
				<div className={classes.video}>
					<img src={CourseImg} alt="" />
					<p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
					<div className={classes.qmeta}>
						<p>10 Questions</p>
						<p>Score : Not taken yet</p>
					</div>
				</div>
			</Link>
		</>
	);
}
