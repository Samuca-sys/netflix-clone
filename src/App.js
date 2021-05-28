import React, { useEffect, useState } from 'react';

import { MovieRow } from './components/MovieRow';
import { FeaturedMovie } from './components/FeaturedMovie';
import { Header } from './components/Header';

import { getHomeList, getMovieInfo } from './services/api.js';

import './App.css';

export default function App() {
	const [movieList, setMovieList] = useState([]);
	const [featuredData, setFeaturedData] = useState(null);
	const [blackHeader, setBlackHeader] = useState(false);

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
		};

		loadAll();
	}, []);

	useEffect(() => {
		const scrollListener = () => {
			if (window.scrollY > 10) {
				setBlackHeader(true);
			} else {
				setBlackHeader(false);
			}
		};

		window.addEventListener('scroll', scrollListener);

		return () => {
			window.removeEventListener('scroll', scrollListener);
		};
	}, []);

	return (
		<div className='page'>
			<Header background={blackHeader} />
			{featuredData && <FeaturedMovie item={featuredData} />}

			<section className='lists'>
				{movieList.map((item, key) => (
					<MovieRow key={key} title={item.title} items={item.items} />
				))}
			</section>
		</div>
	);
}
