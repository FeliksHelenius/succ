import { Login } from '../components/global-components/login';
import { SignUp } from '../components/global-components/signUp';
import React, { useState } from 'react';
interface Token {
	token: string;
}
export const AuthPage = () => {
	const [state, setState] = useState(true);
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}>
			{state && <Login />}
			{!state && <SignUp />}
			<label htmlFor="button" style={{ position: 'absolute', top: '60svh' }}>
				or click here to
			</label>
			<button
				style={{ position: 'absolute', top: '65svh' }}
				onClick={() => {
					setState((current) => !current);
				}}>
				{state && <label>Sign Up</label>}
				{!state && <label>Login</label>}
			</button>
		</div>
	);
};
