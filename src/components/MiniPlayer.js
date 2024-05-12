import { useRef, useState } from 'react';
import CourseImg from '../assets/images/reactcourse.png';
import classes from '../styles/MiniPlayer.module.css';

function MiniPlayer() {
	const buttonRef = useRef();
	const [status, setStatus] = useState(false);

	function toggleMiniPlayer() {
		if (!status) {
			buttonRef.current.classList.remove(classes.floatingBtn);
			setStatus(true);
		} else {
			buttonRef.current.classList.add(classes.floatingBtn);
			setStatus(false);
		}
	}

	return (
		<>
			<div
				className={`${classes.miniPlayer} ${classes.floatingBtn}`}
				ref={buttonRef}
				onClick={toggleMiniPlayer}
			>
				<span className={`material-icons-outlined ${classes.open}`}>
					play_circle_filled
				</span>
				<span
					className={`material-icons-outlined ${classes.close}`}
					onClick={toggleMiniPlayer}
				>
					close
				</span>
				<img src={CourseImg} alt="Course" />
				<p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
			</div>
		</>
	);
}

export default MiniPlayer;
