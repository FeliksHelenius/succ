import { useRef } from 'react';
import signUp from './utils/signup';
export const SignUp = () => {
	let username = useRef<HTMLInputElement>(null);
	let password = useRef<HTMLInputElement>(null);
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
						console.log('provide more info');
					} else {
						signUp({
							username: username.current?.value.trim() as string,
							password: password.current?.value.trim() as string,
						});
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
				<button type="submit">sign up</button>
			</form>
		</div>
	);
};
