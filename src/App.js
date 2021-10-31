import React, { useState } from 'react';
import DisabilitiesPicker from './components/DisabilitiesPicker';
import Namespace from './utils/namespace';

import './scss/App.scss';
import './bootstrap/bootstrap-reboot.min.css';
import './bootstrap/bootstrap-grid.min.css';
import './bootstrap/bootstrap-utilities.min.css';

const blinder = require('color-blind');

const n = new Namespace('app');

export const NO_COLOR_BLINDNESS = 'none';

const colors = {
	'light-grey': '#fafafa',
	red: '#ff0000',
};
const computeColorsString = (colorBlindness) => {
	const result = [];
	for (const [colorName, value] of Object.entries(colors)) {
		const transformedColor = colorBlindness === NO_COLOR_BLINDNESS
			? value
			: blinder[colorBlindness](value);
		result.push(`--${colorName}: ${transformedColor};\n`);
	}
	return result.join('');
};

const App = () => {
	const [cacheEnabled, setCacheEnabled] = useState(false);
	const [mouseEnabled, setMouseEnabled] = useState(true);
	const [colorBlindness, setColorBlindness] = useState(NO_COLOR_BLINDNESS);
	return (
		<>
			<style>
				{':root {'}
					{computeColorsString(colorBlindness)}
				{'}'}
			</style>
			{cacheEnabled && <div className={n.child('cache')} />}
			<DisabilitiesPicker
				{...{
					mouseEnabled,
					cacheEnabled,
					colorBlindness,
					setCacheEnabled,
					setMouseEnabled,
					setColorBlindness,
				}}
				className={n.child('disabilities-picker')}
			/>
			<div className={n.child('site-wrapper', !mouseEnabled && ['mouse-disabled'])}>
				{/* Content of site will go here */}
			</div>
		</>
	);
}

export default App;
