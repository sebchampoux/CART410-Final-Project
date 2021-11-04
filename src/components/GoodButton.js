import Namespace from "../utils/namespace";

const n = new Namespace('button');

const GoodButton = ({
	children,
	onClick,
	className,
	btnStyle,
	...otherProps
}) => {
	const mods = ['good'];
	if (btnStyle) mods.push(btnStyle);
	return (
		<button
			className={n.base(mods, className)}
			onClick={onClick}
			{...otherProps}
		>
			{children}
		</button>
	);
}
export default GoodButton;
