import React, { useState } from 'react';

import { EXAMPLE_BAD, EXAMPLE_GOOD, NO_COLOR_BLINDNESS } from './constants/constants';
import Namespace from './utils/namespace';

import './bootstrap/bootstrap-reboot.min.css';
import './bootstrap/bootstrap-grid.min.css';
import './bootstrap/bootstrap-utilities.min.css';
import './scss/App.scss';

import Colors from './components/Colors';
import DisabilitiesPicker from './components/DisabilitiesPicker';
import BadButton from './components/BadButton';
import GoodButton from './components/GoodButton';
import Example from './components/Example';
import Section from './components/Section';
import GoodCollapsible from './components/GoodCollapsible';
import BadCollapsible from './components/BadCollapsible';
import GoodTabs from './components/GoodTabs';
import BadTabs from './components/BadTabs';

const n = new Namespace('app');

const App = () => {
	const [cacheEnabled, setCacheEnabled] = useState(false);
	const [mouseEnabled, setMouseEnabled] = useState(true);
	const [colorBlindness, setColorBlindness] = useState(NO_COLOR_BLINDNESS);

	return (
		<>
			<Colors colorBlindness={colorBlindness} />
			<a href="#main-content" className={n.child('skip-to-link')}>Skip to main content</a>
			<a href="#disabilities-picker" className={n.child('skip-to-link')}>Skip to disabilities picker</a>
			{cacheEnabled && <div className={n.child('cache')} />}
			<div className={n.child('site-wrapper', !mouseEnabled && ['mouse-disabled'])}>
				<main id="main-content" tabIndex="-1" className={n.child('main')}>
					<div className={n.child('container', null, 'container')}>
						<Section
							headText="Buttons"
							className={n.child('section')}
						>
							<Example exampleType={EXAMPLE_BAD}>
								<BadButton onClick={() => alert('Inaccessible button clicked!')}>Bad button!</BadButton>
							</Example>
							<Example exampleType={EXAMPLE_GOOD}>
								<GoodButton onClick={() => alert('Accessible button clicked!')}>Accessible button!</GoodButton>
							</Example>
						</Section>
						<Section
							headText="Collapsibles"
							className={n.child('section')}
						>
							<Example exampleType={EXAMPLE_BAD}>
								<BadCollapsible />
							</Example>
							<Example exampleType={EXAMPLE_GOOD}>
								<GoodCollapsible />
							</Example>
						</Section>
						<Section
							headText="Tabs"
							className={n.child('section')}
						>
							<Example exampleType={EXAMPLE_BAD}>
								<BadTabs />
							</Example>
							<Example exampleType={EXAMPLE_GOOD}>
								<GoodTabs />
							</Example>
						</Section>
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
