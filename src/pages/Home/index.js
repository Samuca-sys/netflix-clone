import React, { useContext } from 'react';

import { MovieRow } from '../../components/MovieRow';
import { FeaturedMovie } from '../../components/FeaturedMovie';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import './styles.css';
import { HomeContext } from '../../contexts/HomeContext';

export default function Home() {
	const { blackHeader, isLoading, movieList, featuredData } =
		useContext(HomeContext);

	return (
		<div className='page'>
			<Header background={blackHeader} />
			{isLoading ? (
				<div className='loading'>
					<img
						src='https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif'
						alt='loading'
					/>
				</div>
			) : (
				<>
					{featuredData && <FeaturedMovie item={featuredData} />}
					<section className='lists'>
						{movieList.map((item, key) => (
							<MovieRow key={key} title={item.title} items={item.items} />
						))}
					</section>
					<Footer />
				</>
			)}
		</div>
	);
}
