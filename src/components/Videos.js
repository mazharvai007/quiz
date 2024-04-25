import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useVideoList from '../hooks/useVideoList';
import Video from './Video';

export default function Videos() {
	const [page, setPage] = useState(1);
	const { loading, error, videos, hasMore } = useVideoList(page, 8);

	return (
		<>
			{videos.length > 0 && (
				<InfiniteScroll
					dataLength={videos.length}
					hasMore={hasMore}
					loader="Loading..."
					next={() => setPage(page + 8)}
				>
					{videos.map((video) => (
						<Video
							key={video.youtubeID}
							id={video.youtubeID}
							title={video.title}
							noq={video.noq}
						/>
					))}
				</InfiniteScroll>
			)}

			{!loading && videos.length === 0 && <div>No data Found!</div>}
			{error && <div>There was an error</div>}
			{loading && <div>Loading...</div>}
		</>
	);
}
