import { useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';

export default function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState('');
	const [error, setError] = useState('');

	const { login } = useAuth();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError('');
			setLoading(true);

			await login(email, password);
			setSuccess('Login Successfully!');
			redirect('/');
		} catch (error) {
			console.log(error);
			setLoading(false);
			setError('Login Failed!');
		}
	}

	return (
		<>
			<Form
				className="form"
				style={{ height: '330px' }}
				onSubmit={handleSubmit}
			>
				<TextInput
					type="email"
					placeholder="Enter Email"
					iconName="alternate_email"
					icon="material-icons-outlined"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<TextInput
					type="password"
					placeholder="Enter password"
					iconName="lock"
					icon="material-icons-outlined"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>

				<Button type="submit" disabled={loading}>
					<span>Submit Now</span>
				</Button>

				{success && <p className="success">{success}</p>}
				{error && <p className="error">{error}</p>}

				<div className="info">
					Don't have an account? <Link to="/signup">Signup</Link>{' '}
					instead.
				</div>
			</Form>
		</>
	);
}
