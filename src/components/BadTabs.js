import { useState, useRef } from "react";
import { tabsContent } from '../constants/tabsContent';
import Namespace from "../utils/namespace";

const n = new Namespace('tabs');

const BadTabs = () => {
	const [activeTab, setActiveTab] = useState(tabsContent[0]);
	const tabsBtnsRefs = useRef([]);

	return (
		<div className={n.base()}>
			<ul role="tablist" aria-label="rides" className={n.child('tabs-list')}>
				{tabsContent.map((content, index) => {
					const { coasterName } = content;
					const isActive = (activeTab === content);
					const openTab = () => setActiveTab(content);

					return (
						<li
							className={n.child('tab-item', isActive && ['active'])}
							key={coasterName}
						>
							<button
								ref={r => { tabsBtnsRefs.current[index] = r; }}
								className={n.child('tab-btn', isActive && ['active'])}
								onClick={openTab}
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
						key={coasterName}
						hidden={!isActive}
					>
						{tabContent}
					</div>
				);
			})}
		</div>
	);
};
export default BadTabs;
