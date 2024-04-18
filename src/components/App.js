import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../styles/App.css';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Signup from './pages/Signup';

export default function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/quiz" element={<Quiz />} />
					<Route path="/result" element={<Result />} />
				</Routes>
			</Layout>
		</Router>
	);
}
