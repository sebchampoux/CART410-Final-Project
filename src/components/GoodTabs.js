import { useState, useRef } from "react";
import { ARROW_LEFT, ARROW_RIGHT, ESCAPE, HOME } from "../constants/keyboardKeys";
import { contentId, tabId, tabsContent } from '../constants/tabsContent';
import Namespace from "../utils/namespace";

const n = new Namespace('tabs');

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
