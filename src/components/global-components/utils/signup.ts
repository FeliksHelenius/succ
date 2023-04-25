import axios from 'axios';
import { server } from './server';
export default function signUp({
	username,
	password,
}: {
	username: string;
	password: string;
}) {
	axios
		.post(server + 'signup', {
			username: username,
			password: password,
		})
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
}
