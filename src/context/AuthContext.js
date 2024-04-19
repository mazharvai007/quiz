import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from '@firebase/auth';
import { createContext, useContext, useState } from 'react';
import '../firebase';

// Make AuthContext using Context API
const AuthContext = createContext();

/**
 * Make useAuth custom hook
 * @returns
 */
export function useAuth() {
	return useContext(AuthContext);
}

/**
 * AuthProvider is the authentication provider
 * It will wrap the enter application
 * We use loading and currentUser local states for handling
 * the application components and get the current user from
 * the firebase while login/signup
 * @param {*} param0
 * @returns
 */
export function AuthProvider({ value, children }) {
	const [loading, setLoading] = useState(true);
	const [currentUser, setCurrentUser] = useState();

	/**
	 * Create user by signup on Firebase
	 * @param {*} email
	 * @param {*} password
	 * @param {*} username
	 */
	async function signup(email, password, username) {
		const auth = getAuth();

		await createUserWithEmailAndPassword(auth, email, password);

		// Update Profile
		await updateProfile(auth.currentUser, { displayName: username });

		const user = auth.currentUser;
		setCurrentUser({
			...user,
		});
	}

	/**
	 * Login
	 * @param {*} email
	 * @param {*} password
	 * @returns
	 */
	async function login(email, password) {
		const auth = getAuth();
		return await signInWithEmailAndPassword(auth, email, password);
	}

	/**
	 * User can logout
	 * @returns
	 */
	async function logout() {
		const auth = getAuth();
		return await signOut(auth);
	}

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
