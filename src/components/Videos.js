import useVideoList from '../hooks/useVideoList';
import classes from '../styles/Videos.module.css';
import Video from './Video';

export default function Videos() {
	const { loading, error, videos } = useVideoList();

	return (
		<>
			<div className={classes.videos}>
				{videos.length > 0 &&
					videos.map((video) => (
						<Video
							key={
								video.youtubeID + Math.floor(Math.random() * 10)
							}
							id={video.youtubeID}
							title={video.title}
							noq={video.noq}
						/>
					))}
				{!loading && videos.length === 0 && <div>No data Found!</div>}
				{!error && <div>There was an error</div>}
				{loading && <div>Loading...</div>}
			</div>
		</>
	);
}
