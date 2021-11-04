import Namespace from "../utils/namespace";

const n = new Namespace('input');

const BadInput = ({
	className,
	label,
	name,
	type,
	...otherProps
}) => (
	<div className={n.base([type], className)}>
		{type === 'checkbox' && (
			<span className={n.child('label', [type])}>{label}</span>
		)}
		<input
			placeholder={label}
			className={n.child('input', [type])}
			name={name}
			type={type}
			{...otherProps}
		/>
	</div>
);
export default BadInput;
