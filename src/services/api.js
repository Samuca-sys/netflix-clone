const API_BASE = 'https://api.themoviedb.org/3';
const language = 'pt-BR';
const apiKey = process.env.REACT_APP_API_PUBLIC_KEY;

const basicFetch = async (endpoint) => {
	const req = await fetch(`${API_BASE}${endpoint}`);
	const json = await req.json();
	return json;
};

export const getHomeList = async () => {
	return [
		{
			slug: 'originals',
			title: 'Originais da Netflix',
			items: await basicFetch(
				`/discover/tv?with_network=213&language=${language}&api_key=${apiKey}`
			),
		},
		{
			slug: 'trending',
			title: 'Recomendados para você',
			items: await basicFetch(
				`/trending/all/week?&language=${language}&api_key=${apiKey}`
			),
		},
		{
			slug: 'top-rated',
			title: 'Em Alta',
			items: await basicFetch(
				`/movie/top_rated?&language=${language}&api_key=${apiKey}`
			),
		},
		{
			slug: 'action',
			title: 'Ação',
			items: await basicFetch(
				`/discover/movie?with_genres=28&language=${language}&api_key=${apiKey}`
			),
		},
		{
			slug: 'adventure',
			title: 'Aventura',
			items: await basicFetch(
				`/discover/movie?with_genres=12&language=${language}&api_key=${apiKey}`
			),
		},
		{
			slug: 'comedy',
			title: 'Comédia',
			items: await basicFetch(
				`/discover/movie?with_genres=35&language=${language}&api_key=${apiKey}`
			),
		},
		{
			slug: 'horror',
			title: 'Terror',
			items: await basicFetch(
				`/discover/movie?with_genres=27&language=${language}&api_key=${apiKey}`
			),
		},
		{
			slug: 'romance',
			title: 'Romance',
			items: await basicFetch(
				`/discover/movie?with_genres=10749&language=${language}&api_key=${apiKey}`
			),
		},
		{
			slug: 'documentary',
			title: 'Documentário',
			items: await basicFetch(
				`/discover/movie?with_genres=99&language=${language}&api_key=${apiKey}`
			),
		},
		{
			slug: 'animation',
			title: 'Animação',
			items: await basicFetch(
				`/discover/movie?with_genres=16&language=${language}&api_key=${apiKey}`
			),
		},
	];
};

export const getMovieInfo = async (movieId, type) => {
	let info = {};

	if (movieId) {
		switch (type) {
			case 'movie':
				info = basicFetch(
					`/movie/${movieId}?language=${language}&api_key=${apiKey}`
				);
				break;
			case 'tv':
				info = basicFetch(
					`/tv/${movieId}?language=${language}&api_key=${apiKey}`
				);
				break;
			default:
				info = null;
				break;
		}
	}
	return info;
};
