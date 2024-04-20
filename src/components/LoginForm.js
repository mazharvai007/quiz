import { Link } from 'react-router-dom';
import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';

export default function LoginForm() {
	return (
		<>
			<Form className="form" style={{ height: '330px' }} action="#">
				<TextInput
					type="email"
					placeholder="Enter Email"
					iconName="alternate_email"
					icon="material-icons-outlined"
				/>
				<TextInput
					type="password"
					placeholder="Enter password"
					iconName="lock"
					icon="material-icons-outlined"
				/>

				<Button>
					<span>Submit Now</span>
				</Button>

				<div className="info">
					Don't have an account? <Link to="/signup">Signup</Link>{' '}
					instead.
				</div>
			</Form>
		</>
	);
}
