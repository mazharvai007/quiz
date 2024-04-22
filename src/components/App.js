import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import '../styles/App.css';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Signup from './pages/Signup';
import PrivateRoute from './PrivateRoute';

export default function App() {
	return (
		<Router>
			<AuthProvider>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/login" element={<Login />} />
						<Route
							path="/quiz"
							element={
								<PrivateRoute>
									<Quiz />
								</PrivateRoute>
							}
						/>
						<Route
							path="/result"
							element={
								<PrivateRoute>
									<Result />
								</PrivateRoute>
							}
						/>
					</Routes>
				</Layout>
			</AuthProvider>
		</Router>
	);
}
