import React, { createContext, useState, useEffect } from 'react';

import { getHomeList, getMovieInfo } from '../services/api.js';

export const HomeContext = createContext();

export function HomeContextProvider({ children }) {
	const [movieList, setMovieList] = useState([]);
	const [featuredData, setFeaturedData] = useState(null);
	const [blackHeader, setBlackHeader] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const loadAll = async () => {
			try {
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
				setIsLoading(false);
			} catch (error) {
				console.log(error, 'Error getting home data');
			}
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
		<HomeContext.Provider
			value={{ blackHeader, featuredData, movieList, isLoading }}
		>
			{children}
		</HomeContext.Provider>
	);
}
