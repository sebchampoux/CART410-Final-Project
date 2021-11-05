/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Namespace from '../utils/namespace';

import '../bootstrap/bootstrap-reboot.min.css';
import '../bootstrap/bootstrap-grid.min.css';
import '../bootstrap/bootstrap-utilities.min.css';
import '../scss/App.scss';

import { NO_COLOR_BLINDNESS } from '../constants/constants';

import Colors from '../components/Colors';
import DisabilitiesPicker from '../components/DisabilitiesPicker';
import GoodCollapsible from '../components/GoodCollapsible';
import GoodInput from '../components/GoodInput';
import GoodButton from '../components/GoodButton';
import Textarea from '../components/Textarea';

const nApp = new Namespace('app');
const nMain = new Namespace('main');
const nForm = new Namespace('form');
const nHeader = new Namespace('header');

const DemoPage = () => {
	const [cacheEnabled, setCacheEnabled] = useState(false);
	const [mouseEnabled, setMouseEnabled] = useState(true);
	const [colorBlindness, setColorBlindness] = useState(NO_COLOR_BLINDNESS);

	return (
		<>
			<Colors colorBlindness={colorBlindness} />
			<a href="#main-content" className={nApp.child('skip-to-link')}>Skip to main content</a>
			<a href="#disabilities-picker" className={nApp.child('skip-to-link')}>Skip to disabilities picker</a>
			{cacheEnabled && <div className={nApp.child('cache')} />}

			<div className={nApp.child('site-wrapper', !mouseEnabled && ['mouse-disabled'])}>
				<nav aria-label="Main navigation">
					<ul aria-label="Main navigation links">
					</ul>
				</nav>
				<header className={nHeader.base()}>
					<div className="container">
						<h1>Six Flags Great America</h1>
						<h2>A constituent of the Six Flags<sup>&reg;</sup> family</h2>
					</div>
				</header>
				<main id="main-content" tabIndex="-1" className={nMain.base(null, nApp.child('main'))}>
					<section className={nMain.child('container', null, 'container')}>
						<div className="row">
							<div className="col-7">
								<h2>Frequently asked questions</h2>
								<p>Got a question about our park? Have a look here!</p>
								<GoodCollapsible className={nMain.child('collapsible')} title="What types of jobs does Six Flags Great America offer and how do I apply?">
									<p>Have you always wanted to work at Six Flags? Join our team! Six Flags offers fun, fulfilling jobs in various departments––both seasonal and long-term. Check out our Jobs Page for more information and to apply online.</p>
								</GoodCollapsible>
								<GoodCollapsible className={nMain.child('collapsible')} title="Do you offer a non-rider discount?">
									<p>No, Six Flags Great America is a pay one price facility. Because of the breadth of entertainment offered for all ages, Six Flags Great America & Six Flags maintains the pay-one-price policy for all Guests to enjoy the rides, slides, shows, and other entertainment.</p>
								</GoodCollapsible>
								<GoodCollapsible className={nMain.child('collapsible')} title="What is The Flash Pass and how does it work?">
									<p>What is The Flash Pass and how does it work? On a busy day at the park, you will love having The Flash Pass–– an electronic ride reservation system that holds your place in line at the park’s most popular rides while you enjoy other attractions.  It is super-convenient!</p>
								</GoodCollapsible>
								<GoodCollapsible className={nMain.child('collapsible')} title="What are the best days to visit?">
									<p>Every day is a great day to visit! But, if you are worried about long lines and crowds, plan to visit the park when attendance is lightest. Best bets: weekdays during the summer and any regular operating day during the months of May, June and September.</p>
								</GoodCollapsible>
								<h2>Contact us</h2>
								<p>Couldn't quite find what you were looking for? Contact us!</p>
								<form className={nForm.base()}>
									<GoodInput
										className={nForm.child('input')}
										label="Full name"
										id="full-name"
										name="full-name"
										type="text"
									/>
									<GoodInput
										className={nForm.child('input')}
										label="Email address"
										id="email-address"
										name="email-address"
										type="email"
									/>
									<GoodInput
										className={nForm.child('input')}
										label="Reason for inquiry"
										id="subject"
										name="subject"
										type="text"
									/>
									<Textarea
										className={nForm.child('input')}
										label="Detail your inquiry here"
										id="message"
										name="message"
									/>
									<GoodInput
										className={nForm.child('input')}
										label="I would like to subscribe to Six Flags Great America's news"
										id="subscribe-newsletter"
										name="subscribe-newsletter"
										type="checkbox"
									/>
									<GoodButton type="submit">Send</GoodButton>
								</form>
							</div>
							<aside className="col-3 offset-1">
								<h2>Related content</h2>
								<nav>
									<ul aria-label="Related content">
										<li><a href="#">Park map</a></li>
										<li><a href="#">Tickets</a></li>
										<li><a href="#">Season passes</a></li>
										<li><a href="#">The Flash Pass</a></li>
									</ul>
								</nav>
							</aside>
						</div>
					</section>
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
				className={nApp.child('disabilities-picker')}
			/>
		</>
	);
};
export default DemoPage;
