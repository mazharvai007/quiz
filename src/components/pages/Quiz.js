import { getDatabase, ref, set } from 'firebase/database';
import _ from 'lodash';
import { useEffect, useReducer, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import useQuestions from '../../hooks/useQuestions';
import Answer from '../Answers';
import MiniPlayer from '../MiniPlayer';
import ProgressBar from '../ProgressBar';

/**
 * It will be added checked false in the each questions.
 * When users checked the Answers, the checked value
 * will be changed.
 */
const initialState = null;

const reducer = (state, action) => {
	switch (action.type) {
		case 'questions':
			action.value.forEach((question) => {
				question.options.forEach((option) => {
					option.checked = false;
				});
			});
			return action.value;

		case 'answer':
			const questions = _.cloneDeep(state);
			questions[action.questionId].options[action.optionIndex].checked =
				action.value;
			return questions;
		default:
			return state;
	}
};

export default function Quiz() {
	const { id } = useParams();
	const { loading, error, questions } = useQuestions(id);
	const [currentQuestion, setCurrentQuestion] = useState(0);

	// use the useReducer for handling the Quiz questions and answer
	const [qna, dispatch] = useReducer(reducer, initialState);
	const { currentUser } = useAuth();
	const navigate = useNavigate();
	const { state } = useLocation();
	const { videoTitle } = state || {};

	/**
	 * Get Questions of the Quiz based on the video
	 */
	useEffect(() => {
		dispatch({ type: 'questions', value: questions });
	}, [questions]);

	/**
	 * Handle the answers based on the Questions
	 * @param {*} e
	 * @param {*} index
	 */
	function handleAnswerChange(e, index) {
		dispatch({
			type: 'answer',
			questionId: currentQuestion,
			optionIndex: index,
			value: e.target.checked,
		});
	}

	/**
	 * Handle when user clicks on the next button to get the next question
	 */
	function nextQuestion() {
		if (currentQuestion + 1 < questions.length) {
			setCurrentQuestion((prevCurrent) => prevCurrent + 1);
		}
	}

	/**
	 * Handle when user clicks on the prev button to get the prev question
	 */
	function prevQuestion() {
		if (currentQuestion >= 1 && currentQuestion <= questions.length) {
			setCurrentQuestion((prevCurrent) => prevCurrent - 1);
		}
	}

	/**
	 * When progress value is 100 then submit method
	 * will be rendered and submit the Quiz
	 */
	async function handleSubmit() {
		const { uid } = currentUser;

		const db = getDatabase();
		const resultRef = ref(db, `result/${uid}`);
		await set(resultRef, {
			[id]: qna,
		});

		navigate(`/result/${id}`, {
			state: { qna },
		});
	}

	/**
	 * Calculate percentage of progress
	 */
	const calculatePercentage =
		questions.length > 0
			? ((currentQuestion + 1) / questions.length) * 100
			: 0;

	return (
		<>
			{loading && <div>Loading...</div>}
			{error && <div>There was an error!</div>}
			{!loading && !error && qna && qna.length > 0 && (
				<>
					<h1>{qna[currentQuestion].title}</h1>
					<h4>Question can have multiple answers</h4>

					<Answer
						input={true}
						options={qna[currentQuestion].options}
						handleChange={handleAnswerChange}
					/>
					<ProgressBar
						next={nextQuestion}
						prev={prevQuestion}
						submit={handleSubmit}
						progress={calculatePercentage}
					/>
					<MiniPlayer id={id} title={videoTitle} />
				</>
			)}
		</>
	);
}
