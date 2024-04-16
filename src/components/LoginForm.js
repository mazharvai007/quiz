import classes from '../styles/Login.module.css';
import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';

export default function LoginForm() {
	return (
		<>
			<Form className={`${classes.login} form`} action="#">
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

				<Button>Submit Now</Button>

				<div className="info">
					Don't have an account? <a href="signup.html">Signup</a>
					instead.
				</div>
			</Form>
		</>
	);
}
