import _ from 'lodash';
import { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
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

	return (
		<>
			{loading && <div>Loading...</div>}
			{error && <div>There was an error!</div>}
			{!loading && !error && qna && qna.length > 0 && (
				<>
					<h1>{qna[currentQuestion].title}</h1>
					<h4>Question can have multiple answers</h4>

					<Answer
						options={qna[currentQuestion].options}
						handleChange={handleAnswerChange}
					/>
					<ProgressBar />
					<MiniPlayer />
				</>
			)}
		</>
	);
}
