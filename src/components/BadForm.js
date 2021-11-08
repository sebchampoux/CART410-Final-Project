import { useRef } from "react";
import Namespace from "../utils/namespace";
import BadButton from './BadButton';
import BadInput from './BadInput';

const n = new Namespace('form');

const BadForm = ({
	title = 'Create an account!',
}) => {
	const onSubmit = e => {
		e.preventDefault();
		alert('Bad form submitted!');
	};
	const formRef = useRef(null);
	const onSubmitBtnClick = () => {
		formRef.current.requestSubmit();
	};
	return (
		<form onSubmit={onSubmit} className={n.base()} ref={formRef}>
			<h2 className={n.child('heading')}>{title}</h2>
			<BadInput
				className={n.child('input')}
				label="Email address"
				id="email-address"
				name="email-address"
				type="email"
			/>
			<BadInput
				className={n.child('input')}
				label="Password"
				id="password"
				name="password"
				type="password"
			/>
			<BadInput
				className={n.child('input')}
				label="Confirm your password"
				id="confirm-password"
				name="confirm-password"
				type="password"
			/>
			<BadInput
				className={n.child('input')}
				label="I have read and accept the terms and conditions"
				id="confirm-TOS-2"
				name="confirm-TOS"
				type="checkbox"
			/>
			<BadButton
				className={n.child('submit-btn')}
				onClick={onSubmitBtnClick}
			>
				Subscribe!
			</BadButton>
		</form>
	);
};
export default BadForm;
