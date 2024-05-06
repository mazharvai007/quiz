import {
	get,
	getDatabase,
	limitToFirst,
	orderByKey,
	query,
	ref,
	startAt,
} from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useVideo(page, limit) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [videos, setVideos] = useState([]);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		async function fetchVideos() {
			// Database related works
			const db = getDatabase();
			const videosRef = ref(db, 'videos');
			const videoQuery = query(
				videosRef,
				orderByKey(),
				startAt('' + page),
				limitToFirst(limit)
			);

			try {
				setError(false);
				setLoading(true);

				// Request to firebase database
				const snapshot = await get(videoQuery);
				setLoading(false);

				if (snapshot.exists()) {
					setVideos((prevVideos) => {
						return [
							...prevVideos,
							...Object.values(snapshot.val()),
						];
					});
				} else {
					setHasMore(false);
				}
			} catch (error) {
				console.log(error);
				setLoading(false);
				setError(true);
			}
		}

		fetchVideos();
	}, [page, limit]);

	return {
		loading,
		error,
		videos,
		hasMore,
	};
}
