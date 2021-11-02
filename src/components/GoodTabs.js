import { useState, useRef } from "react";
import { ARROW_LEFT, ARROW_RIGHT, ESCAPE, HOME } from "../constants/keyboardKeys";
import Namespace from "../utils/namespace";

const slugify = require('slugify');

const n = new Namespace('tabs');

const tabsContent = [
	{
		coasterName: 'Leviathan',
		tabContent: (
			<>
				<img
					src="https://rcdb.com/aachcda"
					alt="Entrance sign and first drop on Leviathan"
					className={n.child('img')}
				/>
				<p>Canada's Wonderland, introduced in 2012<br />
					Height: 93 m<br />
					Speed: 148 km/h</p>
				<a href="https://rcdb.com/10108.htm" target="_blank" rel="noreferrer">See Leviathan on RCDB</a>
			</>
		),
	},
	{
		coasterName: 'Tatsu',
		tabContent: (
			<>
				<img
					src="https://rcdb.com/aaaxkha"
					alt="Pretzel Loop on Tatsu"
					className={n.child('img')}
				/>
				<p>Six Flags Magic Mountain, introduced in 2006<br />
					Height: 51 m<br />
					Speed: 100 km/h</p>
				<a href="https://rcdb.com/3305.htm" target="_blank" rel="noreferrer">See Tatsu on RCDB</a>
			</>
		),
	},
	{
		coasterName: 'El Toro',
		tabContent: (
			<>
				<img
					src="https://rcdb.com/aabluha"
					alt="First drop on El Toro"
					className={n.child('img')}
				/>
				<p>Six Flags Great Adventure, introduced in 2006<br />
					Height: 55 m<br />
					Speed: 112 km/h</p>
				<a href="https://rcdb.com/3183.htm" target="_blank" rel="noreferrer">See El Toro on RCDB</a>
			</>
		),
	},
	{
		coasterName: 'Maverick',
		tabContent: (
			<>
				<img
					src="https://rcdb.com/aabcsha"
					alt="Swooping turn on Maverick"
					className={n.child('img')}
				/>
				<p>Cedar Point, introduced in 2007<br />
					Height: 32 m<br />
					Speed: 112 km/h</p>
				<a href="https://rcdb.com/3570.htm" target="_blank" rel="noreferrer">See Maverick on RCDB</a>
			</>
		),
	},
];
const tabId = tabName => `tab-${slugify(tabName)}`;
const contentId = tabName => `content-${slugify(tabName)}`;

const GoodTabs = () => {
	const [activeTab, setActiveTab] = useState(tabsContent[0]);
	const tabsBtnsRefs = useRef([]);

	return (
		<div className={n.base()}>
			<ul role="tablist" aria-label="rides" className={n.child('tabs-list')}>
				{tabsContent.map((content, index) => {
					const { coasterName } = content;
					const isActive = (activeTab === content);
					const openTab = () => setActiveTab(content);
					const onKeyDown = e => {
						const { key } = e;
						const tabsBtns = tabsBtnsRefs.current;
						const lastTabIndex = tabsBtns.length - 1;
						if (key === ARROW_LEFT) {
							const prevIndex = (index === 0) ? lastTabIndex : index - 1;
							tabsBtns[prevIndex].focus();
						} else if (key === ARROW_RIGHT) {
							const nextIndex = (index === lastTabIndex) ? 0 : index + 1;
							tabsBtns[nextIndex].focus();
						} else if (key === HOME) {
							e.preventDefault();
							tabsBtns[0].focus();
						} else if (key === ESCAPE) {
							e.preventDefault();
							tabsBtns[lastTabIndex].focus();
						}
					};

					return (
						<li
							className={n.child('tab-item', isActive && ['active'])}
							key={coasterName}
						>
							<button
								ref={r => { tabsBtnsRefs.current[index] = r; }}
								className={n.child('tab-btn', isActive && ['active'])}
								role="tab"
								aria-selected={isActive}
								aria-controls={contentId(coasterName)}
								id={tabId(coasterName)}
								tabIndex={isActive ? 0 : -1}
								onFocus={openTab}
								onClick={openTab}
								onKeyDown={onKeyDown}
							>
								{coasterName}
							</button>
						</li>
					)
				})}
			</ul>
			{tabsContent.map(content => {
				const isActive = (activeTab === content);
				const { coasterName, tabContent } = content;
				return (
					<div
						className={n.child('tabs-content', !isActive && ['hidden'])}
						tabIndex="0"
						hidden={!isActive}
						role="tabpanel"
						id={contentId(coasterName)}
						aria-labelledby={tabId(coasterName)}
						key={contentId(coasterName)}
					>
						{tabContent}
					</div>
				);
			})}
		</div>
	);
};
export default GoodTabs;
