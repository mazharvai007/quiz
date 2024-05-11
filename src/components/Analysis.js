import Questions from './Questions';

function Analysis({ answers }) {
	return (
		<>
			<div style={{ margin: '2rem auto' }}>
				<h1>Question Analysis</h1>
				{/* <h4>You answered 5 out of 10 questions correctly</h4> */}

				<Questions answers={answers} />
			</div>
		</>
	);
}

export default Analysis;
