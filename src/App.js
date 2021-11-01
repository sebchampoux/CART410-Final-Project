import React, { useState } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { NO_COLOR_BLINDNESS } from './constants/constants';
import Namespace from './utils/namespace';

import Colors from './components/Colors';
import DisabilitiesPicker from './components/DisabilitiesPicker';

import './bootstrap/bootstrap-reboot.min.css';
import './bootstrap/bootstrap-grid.min.css';
import './bootstrap/bootstrap-utilities.min.css';
import './scss/App.scss';

const n = new Namespace('app');

const App = () => {
	const [cacheEnabled, setCacheEnabled] = useState(false);
	const [mouseEnabled, setMouseEnabled] = useState(true);
	const [colorBlindness, setColorBlindness] = useState(NO_COLOR_BLINDNESS);

	const sectN = new Namespace('section');
	const btnN = new Namespace('button');

	return (
		<>
			<Colors colorBlindness={colorBlindness} />
			<a href="#main-content" className={n.child('skip-to-content')}>Skip to main content</a>
			{cacheEnabled && <div className={n.child('cache')} />}
			<div className={n.child('site-wrapper', !mouseEnabled && ['mouse-disabled'])}>
				<main id="main-content" tabIndex="-1" className={n.child('main')}>
					<div className={n.child('container', null, 'container')}>
						<section className={sectN.base(null)}>
							<h2 className={sectN.child('head')}>Buttons</h2>
							<div className={sectN.child('row', null, 'row')}>
								<div className={sectN.child('bad-example', null, 'col-lg-6')}>
									<h3 className={sectN.child('example-head', ['bad'])}>
										<Icon icon="times-circle" className={sectN.child('head-icon')} />
										Counter-example
									</h3>
									<div className={btnN.base(['bad'])} onClick={() => alert('Bad button clicked')}>Bad button!</div>
								</div>
								<div className={sectN.child('good-example', null, 'col-lg-6')}>
									<h3 className={sectN.child('example-head', ['good'])}>
										<Icon icon="check-circle" className={sectN.child('head-icon')} />
										Accessible version
									</h3>
									<button className={btnN.base(['good'])} onClick={() => alert('Accessible button clicked')}>Accessible button!</button>
								</div>
							</div>
						</section>
					</div>
				</main>
			</div>
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
		</>
	);
}

export default App;
