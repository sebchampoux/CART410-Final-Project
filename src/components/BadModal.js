import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Namespace from "../utils/namespace";
import GoodButton from "./GoodButton";

const n = new Namespace('modal');

const BadModal = ({
	closeModalFct,
	className,
}) => {
	return (
		<div
			className={n.base(null, className)}
		>
			<div className={n.child('head')}>
				<button onClick={closeModalFct} className={n.child('close-btn')}>
					<FontAwesomeIcon icon="times" />
				</button>
				<h2 id="modal-heading" className={n.child('title')}>Please accept cookies!</h2>
			</div>
			<div className={n.child('content')} id="dialog-content">
				<p>Boy do I hate those pop-ups. If I didn't want to be tracked, I wouldn't be on the net.</p>
				<div className={n.child('buttons-wrapper')}>
					<GoodButton className={n.child('btn')}>I accept cookies</GoodButton>
					<GoodButton className={n.child('btn')} btnStyle="outline">I don't consent :(</GoodButton>
				</div>
			</div>
		</div>
	);
};
export default BadModal;
