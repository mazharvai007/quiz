import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import classes from '../styles/Account.module.css';

function Account() {
	const { currentUser, logout } = useAuth();
	return (
		<>
			<d className={classes.account}>
				{currentUser ? (
					<>
						<span
							className="material-icons-outlined"
							title="Account"
						>
							account_circle
						</span>
						<span>{currentUser.displayName}</span>
						<span
							className="material-icons-outlined"
							title="Logout"
							onClick={logout}
						>
							logout
						</span>
					</>
				) : (
					<>
						<Link to="/signup">Signup</Link>
						<Link to="/login">Login</Link>
					</>
				)}
			</d>
		</>
	);
}

export default Account;
