import { useState } from 'react';
import Namespace from '../utils/namespace';
import { NO_COLOR_BLINDNESS } from '../constants/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const n = new Namespace('disabilities-picker');

const DisabilitiesPicker = ({
	className,
	setCacheEnabled,
	setMouseEnabled,
	cacheEnabled,
	mouseEnabled,
	colorBlindness,
	setColorBlindness,
}) => {
	const onColorBlindnessChange = e => setColorBlindness(e.target.value);
	const [isOpen, setIsOpen] = useState(false);
	const toggleCollapsible = () => setIsOpen(!isOpen);
	const icon = isOpen ? 'times' : 'universal-access';

	return (
		<div className={n.base(null, className)} id="disabilities-picker" tabIndex="-1">
			<button
				className={n.child('toggle-btn', !isOpen && ['closed'])}
				onClick={toggleCollapsible}
				id="picker-toggle-btn"
				aria-controls="picker-form"
				aria-expanded={isOpen}
			>
				<FontAwesomeIcon icon={icon} />
				<span className="sr-only">Toggle disabilities panel</span>
			</button>
			<form
				className={n.child('form', !isOpen && ['closed'])}
				id="picker-form"
				aria-labelledby="picker-toggle-btn"
				role="region"
			>
				<fieldset className={n.child('fieldset')}>
					<legend className={n.child('legend')}>Toggle the simulation of these disabilities</legend>
					<ul className={n.child('options')} aria-label="Disabilities options">
						<li className={n.child('option')}>
							<input
								className={n.child('input')}
								type="checkbox"
								name="disabilities"
								id="blindness"
								onChange={e => setCacheEnabled(e.target.checked)}
								checked={cacheEnabled}
							/>
							<label className={n.child('label')} htmlFor="blindness">Full blindness (Hide website)</label>
						</li>
						<li className={n.child('option')}>
							<input
								className={n.child('input')}
								type="checkbox"
								name="disabilities"
								id="motor-difficulties"
								onChange={e => setMouseEnabled(!e.target.checked)}
								checked={!mouseEnabled}
							/>
							<label className={n.child('label')} htmlFor="motor-difficulties">Motor difficulties (Disable mouse)</label>
						</li>
					</ul>
				</fieldset>
				<fieldset className={n.child('fieldset')}>
					<legend className={n.child('legend')}>Simulate color blindness</legend>
					<ul className={n.child('options')} aria-label="Color blindness options">
						<li className={n.child('option')}>
							<input
								className={n.child('input')}
								type="radio"
								name="color-blindness"
								id="none"
								value={NO_COLOR_BLINDNESS}
								checked={colorBlindness === NO_COLOR_BLINDNESS}
								onChange={onColorBlindnessChange}
							/>
							<label className={n.child('label')} htmlFor="none">None (full color vision)</label>
						</li>
						<li className={n.child('option')}>
							<input
								className={n.child('input')}
								type="radio"
								name="color-blindness"
								id="Protanomaly"
								value="protanomaly"
								checked={colorBlindness === 'protanomaly'}
								onChange={onColorBlindnessChange}
							/>
							<label className={n.child('label')} htmlFor="Protanomaly">Protanomaly (low red)</label>
						</li>
						<li className={n.child('option')}>
							<input
								className={n.child('input')}
								type="radio"
								name="color-blindness"
								id="Deuteranomaly"
								value="deuteranomaly"
								checked={colorBlindness === 'deuteranomaly'}
								onChange={onColorBlindnessChange}
							/>
							<label className={n.child('label')} htmlFor="Deuteranomaly">Deuteranomaly (low green)</label>
						</li>
						<li className={n.child('option')}>
							<input
								className={n.child('input')}
								type="radio"
								name="color-blindness"
								id="Tritanomaly"
								value="tritanomaly"
								checked={colorBlindness === 'tritanomaly'}
								onChange={onColorBlindnessChange}
							/>
							<label className={n.child('label')} htmlFor="Tritanomaly">Tritanomaly (low blue)</label>
						</li>
						<li className={n.child('option')}>
							<input
								className={n.child('input')}
								type="radio"
								name="color-blindness"
								id="Protanopia"
								value="protanopia"
								checked={colorBlindness === 'protanopia'}
								onChange={onColorBlindnessChange}
							/>
							<label className={n.child('label')} htmlFor="Protanopia">Protanopia (no red)</label>
						</li>
						<li className={n.child('option')}>
							<input
								className={n.child('input')}
								type="radio"
								name="color-blindness"
								id="Deuteranopia"
								value="deuteranopia"
								checked={colorBlindness === 'deuteranopia'}
								onChange={onColorBlindnessChange}
							/>
							<label className={n.child('label')} htmlFor="Deuteranopia">Deuteranopia (no green)</label>
						</li>
						<li className={n.child('option')}>
							<input
								className={n.child('input')}
								type="radio"
								name="color-blindness"
								id="Tritanopia"
								value="tritanopia"
								checked={colorBlindness === 'tritanopia'}
								onChange={onColorBlindnessChange}
							/>
							<label className={n.child('label')} htmlFor="Tritanopia">Tritanopia (no blue red)</label>
						</li>
						<li className={n.child('option')}>
							<input
								className={n.child('input')}
								type="radio"
								name="color-blindness"
								id="Achromatomaly"
								value="achromatomaly"
								checked={colorBlindness === 'achromatomaly'}
								onChange={onColorBlindnessChange}
							/>
							<label className={n.child('label')} htmlFor="Achromatomaly">Achromatomaly (almost no color, 1 good cone, 2 poor/blind cones)</label>
						</li>
						<li className={n.child('option')}>
							<input
								className={n.child('input')}
								type="radio"
								name="color-blindness"
								id="Achromatopsia"
								value="achromatopsia"
								checked={colorBlindness === 'achromatopsia'}
								onChange={onColorBlindnessChange}
							/>
							<label className={n.child('label')} htmlFor="Achromatopsia">Achromatopsia (no color)</label>
						</li>
					</ul>
				</fieldset>
			</form>
		</div>
	);
};

export default DisabilitiesPicker;
