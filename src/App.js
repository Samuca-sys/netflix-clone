import React from 'react';

import Home from './pages/Home';

import './App.css';
import { HomeContextProvider } from './contexts/HomeContext';

export default function App() {
	return (
		<HomeContextProvider>
			<Home />
		</HomeContextProvider>
	);
}
