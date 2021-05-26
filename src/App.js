import React, { useEffect, useState } from 'react';

import { MovieRow } from './components/MovieRow';

import { getHomeList } from './services/api.js';

import './App.css';

export default function App() {
	const [movieList, setMovieList] = useState([]);

	useEffect(() => {
		const loadAll = async () => {
			//Get all the list
			let list = await getHomeList();
			setMovieList(list);
		};

		loadAll();
	}, []);

	return (
		<div className='page'>
			<section className='lists'>
				{movieList.map((item, key) => (
					<MovieRow key={key} title={item.title} items={item.items} />
				))}
			</section>
		</div>
	);
}
