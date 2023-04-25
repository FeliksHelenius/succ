import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment, useState, useEffect } from 'react';
import { Home } from './pages/home';
import { Nav } from './components/global-components/nav';
import { AuthPage } from './pages/authPage';
import { Token } from './components/global-components/utils/token';
import { server } from './components/global-components/utils/server';
import axios from 'axios';
export default function App() {
	let headers = {};
	headers = { authorization: sessionStorage.token };
	console.log(sessionStorage.token);

	if (sessionStorage.token) {
		axios.get(server + 'authenticate', { headers: headers }).then((res) => {
			console.log(res.data);
		});
	} else {
		return <AuthPage />;
	}

	// return (
	// 	<BrowserRouter>
	// 		<Routes>
	// 			<Route
	// 				path="/home"
	// 				element={
	// 					<Fragment>
	// 						<Nav />
	// 						<Home />
	// 					</Fragment>
	// 				}
	// 			/>
	// 		</Routes>
	// 	</BrowserRouter>
	// );
}
