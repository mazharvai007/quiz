import { useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from './Form';
import TextInput from './TextInput';

export default function SignupForm() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [agree, setAgree] = useState('');

	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState('');
	const [error, setError] = useState('');

	const { signup } = useAuth();

	async function handleSubmit(e) {
		e.preventDefault();

		console.log(e);

		// Do password validation
		if (password !== confirmPassword) {
			return setError('Password does not match!');
		}

		// Do Signup
		try {
			setError('');
			setLoading(true);

			await signup(email, password, username);
			setSuccess('Account created successfully!');
			redirect('/');
		} catch (error) {
			console.log(error);
			setLoading(false);
			setError('Failed to create an account!');
		}
	}

	return (
		<>
			<Form style={{ height: '500px' }} onSubmit={handleSubmit}>
				<TextInput
					type="text"
					placeholder="Enter Username"
					iconName="person"
					icon="material-icons-outlined"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				<TextInput
					type="text"
					placeholder="Enter Email"
					iconName="alternate_email"
					icon="material-icons-outlined"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<TextInput
					type="password"
					placeholder="Enter Password"
					iconName="lock"
					icon="material-icons-outlined"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<TextInput
					type="password"
					placeholder="Confirm Password"
					iconName="lock_clock"
					icon="material-icons-outlined"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					required
				/>
				<Checkbox
					text="I agree to the Terms &amp; Conditions"
					value={agree}
					onChange={(e) => setAgree(e.target.value)}
					required
				/>

				<Button type="submit">
					<span>Submit Now</span>
				</Button>

				{success && <p className="success">{success}</p>}
				{error && <p className="error">{error}</p>}

				<div className="info">
					Already have an account? <Link to="/login">Login</Link>{' '}
					instead.
				</div>
			</Form>
		</>
	);
}
