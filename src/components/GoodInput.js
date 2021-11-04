import Namespace from "../utils/namespace";

const n = new Namespace('input');

const GoodInput = ({
	className,
	label,
	name,
	id,
	type,
	...otherProps
}) => (
	<div className={n.base([type], className)}>
		<label
			htmlFor={id}
			className={n.child('label', [type])}
		>{label}</label>
		<input
			className={n.child('input', [type])}
			name={name}
			id={id}
			type={type}
			{...otherProps}
		/>
	</div>
);
export default GoodInput;
