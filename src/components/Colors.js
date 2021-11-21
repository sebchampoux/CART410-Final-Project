import { NO_COLOR_BLINDNESS } from '../constants/constants';
const blinder = require('color-blind');

const colors = {
	'grey': '#e8e8e8',
	'light-grey': '#f8f8f8',
	red: '#b80c09',
	'darker-red': '#7c0705',
	blue: '#1393dd',
	white: '#ffffff',
	black: '#000000',

	'very-dark-green': '#1B3B1F',
	'dark-green': '#094F12',
	'medium-green': '#3E6259',
	'light-green': '#61e38e'
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

const Colors = ({
	colorBlindness,
}) => (
	<style>
		{':root {'}
			{computeColorsString(colorBlindness)}
		{'}'}
	</style>
);
export default Colors;
