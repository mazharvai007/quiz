import { createContext, useContext, useState } from 'react';

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

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
