import classes from '../../styles/Signup.module.css';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';

export default function Signup() {
	return (
		<>
			<h1>Create an account</h1>
			<div className="column">
				<Illustration />
				<Form className={classes.signup}>
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
					<Button>Submit Now</Button>
					<div className="info">
						Already have an account? <a href="login.html">Login</a>{' '}
						instead.
					</div>
				</Form>
			</div>
		</>
	);
}