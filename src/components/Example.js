import Namespace from "../utils/namespace";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { EXAMPLE_GOOD } from "../constants/constants";

const n = new Namespace('example');

const Example = ({
	exampleType,
	children,
}) => {
	const headText = exampleType === EXAMPLE_GOOD
		? 'Accessible version'
		: 'Counter-example';
	const icon = exampleType === EXAMPLE_GOOD
		? 'check-circle'
		: 'times-circle';
	return (
		<div className={n.base([exampleType], 'col-lg-6')}>
			<h3 className={n.child('head', [exampleType])}>
				<Icon icon={icon} className={n.child('icon')} />
				{headText}
			</h3>
			{children}
		</div>
	);
};
export default Example;
