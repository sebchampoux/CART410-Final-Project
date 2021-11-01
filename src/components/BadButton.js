import Namespace from "../utils/namespace";

const n = new Namespace('button');

const BadButton = ({
	children,
	onClick,
}) => (
	<div
		className={n.base(['bad'])}
		onClick={onClick}
	>
		{children}
	</div>
);
export default BadButton;
