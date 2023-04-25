import axios from 'axios';
import { server } from './server';
export default async function Authenticate({
	username,
	password,
}: {
	username: string;
	password: string;
}) {
	return await axios
		.post(server + 'login', {
			username: username,
			password: password,
		})
		.then((response) => {
			if (response.data.message == 'failure to login') {
				return 'failure to login';
			} else {
				return response.data.token;
			}
		})
		.catch((error) => {
			console.log(error);
		});
}
