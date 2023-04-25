import { useRef } from 'react';
import Authenticate from './utils/auth';
import { Token } from './utils/token';
export const Login = () => {
	let username = useRef<HTMLInputElement>(null);
	let password = useRef<HTMLInputElement>(null);
	const { token, setToken } = Token();
	return (
		<div id="login">
			<form
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100svw',
					height: '100svh',
					flexDirection: 'column',
					gap: '20px',
				}}
				onSubmit={(e) => {
					e.preventDefault();
					if (username.current?.value == '' || password.current?.value == '') {
						console.log('provide more info' + username.current?.innerText);
					} else {
						const token = async () => {
							const result = await Authenticate({
								username: username.current?.value.trim() as string,
								password: password.current?.value.trim() as string,
							});
							if (result == 'failure to login') {
								console.log('failed to login');
							} else {
								console.log('logged in successfully');
								setToken(result);
								sessionStorage.setItem('token', result);
							}
						};
						token();
					}
				}}>
				<div>
					<label>
						Username:
						<input type="username" name="username" ref={username} />
					</label>
				</div>
				<div>
					<label>
						Password:
						<input type="password" name="password" ref={password} />
					</label>
				</div>
				<button type="submit">login</button>
			</form>
		</div>
	);
};
