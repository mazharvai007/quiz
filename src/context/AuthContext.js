import { createContext, useState } from 'react';

// Make AuthContext using Context API
const AuthContext = createContext();

/**
 * AuthProvider is the authentication provider
 * It will wrap the enter application
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
