import { NO_COLOR_BLINDNESS } from '../constants/constants';
const blinder = require('color-blind');

const colors = {
	'light-grey': '#f8f8f8',
	red: '#ff0000',
	blue: '#1393dd',
	white: '#ffffff',
	black: '#000000',

	'very-dark-green': '#212922',
	'dark-green': '#294936',
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
