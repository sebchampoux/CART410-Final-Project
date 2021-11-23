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
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const nApp = new Namespace('app');
const nMain = new Namespace('main');
const nForm = new Namespace('form');
const nHeader = new Namespace('header');
const nMenu = new Namespace('menu');
const nMainNav = new Namespace('main-nav');
const nFooter = new Namespace('footer');
const nSocial = new Namespace('socials');
const nRelated = new Namespace('related-content');

const DemoPage = () => {
	const [cacheEnabled, setCacheEnabled] = useState(false);
	const [mouseEnabled, setMouseEnabled] = useState(true);
	const [colorBlindness, setColorBlindness] = useState(NO_COLOR_BLINDNESS);
	const formSubmission = e => {
		e.preventDefault();
		alert(e.target.dataset.submitMessage);
	};

	return (
		<>
			<Colors colorBlindness={colorBlindness} />
			<a href="#main-content" className={nApp.child('skip-to-link')}>Skip to main content</a>
			<a href="#footer" className={nApp.child('skip-to-link')}>Skip to footer</a>
			<a href="#disabilities-picker" className={nApp.child('skip-to-link')}>Skip to disabilities picker</a>
			{cacheEnabled && <div className={nApp.child('cache')} />}

			<div className={nApp.child('site-wrapper', !mouseEnabled && ['mouse-disabled'])}>
				<div className={nMainNav.base()}>
					<div className={nMainNav.child('container', null, 'container')}>
						<a href="https://www.sixflags.com/greatamerica/" className={nMainNav.child('logo-link')}>
							<img src="https://sf-static.sixflags.com/wp-content/uploads/sfgam_motion.gif" alt="Six Flags logo" className={nMainNav.child('logo-img')} />
						</a>
						<nav aria-label="Main navigation" className={nMenu.base(null, nMainNav.child('menu'))}>
							<ul aria-label="Main navigation links" className={nMenu.child('list')}>
								<li className={nMenu.child('item')}>
									<a href="#" className={nMenu.child('link')}>Things to do</a>
								</li>
								<li className={nMenu.child('item')}>
									<a href="#" className={nMenu.child('link')}>Plan your visit</a>
								</li>
								<li className={nMenu.child('item')}>
									<a href="#" className={nMenu.child('link')}>Help</a>
								</li>
								<li className={nMenu.child('item')}>
									<a href="#" className={nMenu.child('link', ['buy-tickets'])}>Buy tickets</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<header className={nHeader.base()}>
					<div className="container">
						<div className="row">
							<div className={nHeader.child('content-wrapper')}>
								<h1>Six Flags Great America</h1>
								<h2>A part of the Six Flags<sup>&reg;</sup> family</h2>
							</div>
						</div>
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
								<p>Couldn't quite find what you were looking for? That's unfortunate, but we're nice people. Shoot us an email!</p>
								<form
									className={nForm.base()}
									onSubmit={formSubmission}
									data-submit-message="Contact form submitted!"
								>
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
									<GoodButton type="submit" aria-label="Submit contact form">Send</GoodButton>
								</form>
							</div>
							<aside className="col-4 offset-1">
								<section className={nRelated.base()}>
									<h2>Related content</h2>
									<nav>
										<ul aria-label="Related content" className={nRelated.child('list-links')}>
											<li><a href="#">Park map</a></li>
											<li><a href="#">Tickets</a></li>
											<li><a href="#">Season passes</a></li>
											<li><a href="#">The Flash Pass</a></li>
										</ul>
									</nav>
								</section>
							</aside>
						</div>
					</section>
				</main>
				<footer className={nFooter.base()} id="footer">
					<div className="container">
						<div className={nFooter.child('top-row', null, 'row')}>
							<section className="col-4">
								<h2>Quick Links</h2>
								<nav>
									<ul aria-label="Quick navigation links" className={nFooter.child('quick-links')}>
										<li>
											<a href="#">
												Park map
											</a>
										</li>
										<li>
											<a href="#">
												The Flash Pass
											</a>
										</li>
										<li>
											<a href="#">
												Careers
											</a>
										</li>
									</ul>
								</nav>
							</section>
							<section className="col-4">
								<h2>Subscribe to our newsletter!</h2>
								<form
									data-submit-message="You have been registered to the newsletter successfully!"
									onSubmit={formSubmission}
									className={nForm.base()}
								>
									<GoodInput
										label="Your email"
										type="email"
										id="email"
										name="email"
										className={nForm.child('input')}
									/>
									<GoodInput
										label="I accept the confidentiality agreement"
										type="checkbox"
										id="accept-tos"
										name="accept-tos"
										className={nForm.child('input')}
									/>
									<GoodButton type="submit" aria-label="Sign up for the newsletter">Sign up</GoodButton>
								</form>
							</section>
							<section className="col-4">
								<h2>Join us on social media!</h2>
								<nav className={nSocial.base()}>
									<ul aria-label="Six Flags Great America's social medias" className={nSocial.child('list')}>
										<li className={nSocial.child('item')}>
											<a href="#" className={nSocial.child('link')}>
												<Icon icon={['fab', 'facebook']} />
												<span className="sr-only">Facebook</span>
											</a>
										</li>
										<li className={nSocial.child('item')}>
											<a href="#" className={nSocial.child('link')}>
												<Icon icon={['fab', 'twitter']} />
												<span className="sr-only">Twitter</span>
											</a>
										</li>
										<li className={nSocial.child('item')}>
											<a href="#" className={nSocial.child('link')}>
												<Icon icon={['fab', 'instagram']} />
												<span className="sr-only">Instagram</span>
											</a>
										</li>
									</ul>
								</nav>
							</section>
						</div>
					</div>
					<div className="container">
						<div className="row">
							<section className={nFooter.child('copyright', null, 'col-12')}>
								&copy; 2021 Sébastien - Final Project for CART410 Research-Creation in Computation Arts, Fall 2021.
							</section>
						</div>
					</div>
				</footer>
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
