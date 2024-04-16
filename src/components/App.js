import '../styles/App.css';
import Layout from './Layout';
import Quiz from './pages/Quiz';
// import Login from './pages/Login';
// import Home from './pages/Home';
// import Signup from './pages/Signup';

export default function App() {
	return (
		<Layout>
			{/* <Home /> */}
			{/* <Signup /> */}
			{/* <Login /> */}
			<Quiz />
		</Layout>
	);
}
