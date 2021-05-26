import React, { useEffect, useState } from 'react';

import { MovieRow } from './components/MovieRow';
import { FeaturedMovie } from './components/FeaturedMovie.js';

import { getHomeList, getMovieInfo } from './services/api.js';

import './App.css';

export default function App() {
	const [movieList, setMovieList] = useState([]);
	const [featuredData, setFeaturedData] = useState(null);

	useEffect(() => {
		const loadAll = async () => {
			//Get all the list
			let list = await getHomeList();
			setMovieList(list);

			//Get Feature data
			let originals = list.filter((item) => item.slug === 'originals');
			let randomChosen = Math.floor(
				Math.random() * originals[0].items.results.length - 1
			);
			let chosen = originals[0].items.results[randomChosen];
			let chosenInfo = await getMovieInfo(chosen.id, 'tv');
			setFeaturedData(chosenInfo);
			console.log(chosenInfo);
		};

		loadAll();
	}, []);

	return (
		<div className='page'>
			{featuredData && <FeaturedMovie item={featuredData} />}

			<section className='lists'>
				{movieList.map((item, key) => (
					<MovieRow key={key} title={item.title} items={item.items} />
				))}
			</section>
		</div>
	);
}
