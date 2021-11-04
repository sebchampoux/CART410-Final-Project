import Namespace from "../utils/namespace";
import GoodButton from "./GoodButton";
import GoodInput from "./GoodInput";

const n = new Namespace('form');

const GoodForm = ({
	title = 'Create an account!',
}) => {
	const onSubmit = e => {
		e.preventDefault();
		alert('Form submitted!');
	};
	return (
		<form onSubmit={onSubmit} className={n.base()}>
			<h2 className={n.child('heading')}>{title}</h2>
			<GoodInput
				className={n.child('input')}
				label="Email address"
				id="email-address"
				name="email-address"
				type="email"
			/>
			<GoodInput
				className={n.child('input')}
				label="Password"
				id="password"
				name="password"
				type="password"
			/>
			<GoodInput
				className={n.child('input')}
				label="Confirm your password"
				id="confirm-password"
				name="confirm-password"
				type="password"
			/>
			<GoodInput
				className={n.child('input')}
				label="I have read and accept the terms and conditions"
				id="confirm-TOS"
				name="confirm-TOS"
				type="checkbox"
			/>
			<GoodButton
				className={n.child('submit-btn')}
				type="submit"
			>
				Subscribe!
			</GoodButton>
		</form>
	);
};
export default GoodForm;
