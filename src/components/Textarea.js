import Namespace from "../utils/namespace";

const n = new Namespace('input');

const Textarea = ({
	className,
	label,
	name,
	id,
	...otherProps
}) => (
	<div className={n.base(null, className)}>
		<label
			htmlFor={id}
			className={n.child('label', null)}
		>{label}</label>
		<textarea
			className={n.child('input', null)}
			name={name}
			id={id}
			{...otherProps}
		/>
	</div>
);
export default Textarea;
