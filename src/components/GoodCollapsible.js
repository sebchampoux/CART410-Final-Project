import { useState } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Namespace from "../utils/namespace";

const n = new Namespace('collapsible');

const GoodCollapsible = () => {
	const [isOpen, setIsOpen] = useState(false);
	const icon = isOpen ? 'caret-up' : 'caret-down';
	const toggleCollapsibleOpen = () => setIsOpen(!isOpen);

	return (
		<div className={n.base()}>
			<h3 className={n.child('head')}>
				<button
					className={n.child('toggle-btn')}
					aria-expanded={isOpen}
					controls="collapsibleContent1"
					id="collapsibleHead1"
					onClick={toggleCollapsibleOpen}
				>
					Collapsible head
					<Icon icon={icon} className={n.child('head-icon')} />
				</button>
			</h3>
			<div
				className={n.child('content', !isOpen && ['closed'])}
				id="collapsibleContent1"
				role="region"
				aria-labelledby="collapsibleHead1"
				hidden={!isOpen}
			>
				<p>
					Put a bird on it cliche twee pour-over, fixie chambray migas iceland biodiesel vice messenger bag tumeric marfa salvia. Tumeric banh mi fixie man bun, salvia cornhole irony kombucha plaid hashtag humblebrag. Kickstarter humblebrag jianbing cray fam edison bulb bitters snackwave disrupt irony. Pour-over drinking vinegar fam hammock. Taiyaki pug bitters, hella fam everyday carry locavore banjo mustache tbh adaptogen meggings austin. Polaroid fixie yuccie mlkshk cronut kogi.
				</p>
			</div>
		</div>
	);
};
export default GoodCollapsible;
