import Namespace from "../utils/namespace";

const n = new Namespace('button');

const GoodButton = ({
	children,
	onClick,
	className,
	btnStyle,
}) => {
	const mods = ['good'];
	if (btnStyle) mods.push(btnStyle);
	return (
		<button
			className={n.base(mods, className)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
export default GoodButton;
