import React, { useEffect } from 'react';

import { getHomeList } from './services/api.js';

export default function App() {
	useEffect(() => {
		const loadAll = async () => {
			//Get all the list
			let list = await getHomeList();
			console.log(list);
		};

		loadAll();
	}, []);

	return <h1>Hello world!</h1>;
}
