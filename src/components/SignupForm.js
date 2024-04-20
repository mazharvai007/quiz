import { Link } from 'react-router-dom';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from './Form';
import TextInput from './TextInput';

export default function SignupForm() {
	return (
		<>
			<Form style={{ height: '500px' }}>
				<TextInput
					type="text"
					placeholder="Enter Name"
					iconName="person"
					icon="material-icons-outlined"
				/>
				<TextInput
					type="text"
					placeholder="Enter Email"
					iconName="alternate_email"
					icon="material-icons-outlined"
				/>
				<TextInput
					type="password"
					placeholder="Enter Password"
					iconName="lock"
					icon="material-icons-outlined"
				/>
				<TextInput
					type="password"
					placeholder="Confirm Password"
					iconName="lock_clock"
					icon="material-icons-outlined"
				/>
				<Checkbox text="I agree to the Terms &amp; Conditions" />

				<Button>
					<span>Submit Now</span>
				</Button>

				<div className="info">
					Already have an account? <Link to="/login">Login</Link>{' '}
					instead.
				</div>
			</Form>
		</>
	);
}
