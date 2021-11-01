import Namespace from "../utils/namespace";

const n = new Namespace('button');

const GoodButton = ({
	children,
	onClick,
}) => (
	<button
		className={n.base(['good'])}
		onClick={onClick}
	>
		{children}
	</button>
);
export default GoodButton;
