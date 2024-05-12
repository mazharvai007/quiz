import { useMemo } from 'react';
import SuccessImg from '../assets/images/success.png';
import useFetch from '../hooks/useFetch';
import classes from '../styles/Summery.module.css';

function Summary({ score, noq }) {
	const getKeyword = useMemo(() => {
		if ((score / (noq * 5)) * 100 < 40) {
			return 'failed';
		} else if (
			(score / (noq * 5)) * 100 < 75 &&
			(score / (noq * 5)) * 100 <= 100
		) {
			return 'good';
		} else {
			return 'excellent';
		}
	}, [noq, score]);

	const { loading, error, result } = useFetch(
		`https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
		'GET',
		{
			Authorization: process.env.REACT_APP_PIXELS_API_KEY,
		}
	);

	const image = result ? result?.photos[0].src.medium : SuccessImg;

	return (
		<>
			<div className={classes.summary}>
				<div className={classes.point}>
					<p className={classes.score}>
						Your score is <br />
						{score} out of {noq * 5}
					</p>
				</div>
				{loading && <div>Loading...</div>}
				{error && <div>There was an error!</div>}
				{!loading && !error && (
					<div className={classes.badge}>
						<img src={image} alt="" />
					</div>
				)}
			</div>
		</>
	);
}

export default Summary;
