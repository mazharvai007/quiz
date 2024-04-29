import { getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useQuizList(videoId) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [quiz, setQuiz] = useState([]);

	useEffect(() => {
		async function fetchQuiz() {
			// database related works
			const db = getDatabase();
			const quizRef = ref(db, 'quiz/' + videoId + '/questions');
			const quizQuery = query(quizRef, orderByKey());

			try {
				setError(false);
				setLoading(true);

				// request to firebase database
				const snapshot = await getDatabase(quizQuery);
				setLoading(false);

				if (snapshot.exists()) {
					setQuiz((prevQuiz) => {
						return [...prevQuiz, ...Object.values(snapshot.val())];
					});
				}
			} catch (error) {
				console.log(error);
				setLoading(false);
				setError(true);
			}
		}

		fetchQuiz();
	}, [videoId]);

	return [loading, error, quiz];
}
