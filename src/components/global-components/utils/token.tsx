import { useState, useEffect } from 'react';
export const Token = () => {
	useEffect(() => {
		console.log(token);
		console.log(sessionStorage.token);
	});
	const [token, setToken] = useState('not logged in');
	return { token, setToken };
};
