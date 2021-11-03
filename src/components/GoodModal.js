import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { ESCAPE, TAB } from '../constants/keyboardKeys';
import Namespace from "../utils/namespace";
import GoodButton from "./GoodButton";

const n = new Namespace('modal');

const isFocusable = element => {
	try {
		element.focus();
	}
	catch (e) {
		return false;
	}
	return (document.activeElement === element);
};
const findFocusableChilds = (node, onNodeFocusable) => {
	Array.from(node.childNodes).forEach(child => {
		if (!child) return;
		if (isFocusable(child)) {
			onNodeFocusable(child);
		}
		findFocusableChilds(child, onNodeFocusable);
	});
};

const GoodModal = ({
	closeModalFct,
	className,
}) => {
	const modalRootRef = useRef(null);
	const focusableElementsRefs = useRef(null);

	// Trap focus
	useEffect(() => {
		const result = [];
		findFocusableChilds(modalRootRef.current, c => result.push(c));
		focusableElementsRefs.current = result;

		const trapFocus = e => {
			const { key, target, shiftKey } = e;
			const focusableElems = focusableElementsRefs.current;
			const firstFocusableElem = focusableElems[0];
			const lastFocusableElem = focusableElems[focusableElems.length - 1];
			if (key === TAB && shiftKey && target === firstFocusableElem) {
				e.preventDefault();
				lastFocusableElem.focus();
			} else if (key === TAB && !shiftKey && target === lastFocusableElem) {
				e.preventDefault();
				firstFocusableElem.focus();
			}
		};
		document.addEventListener('keydown', trapFocus);
		return () => document.removeEventListener('keydown', trapFocus);
	});

	// focus on modal when it opens
	useEffect(() => modalRootRef.current.focus()); 

	// Close on escape
	useEffect(() => {
		const closeModalOnEscape = ({ key }) => {
			if (key === ESCAPE) {
				closeModalFct();
			}
		};
		document.addEventListener('keydown', closeModalOnEscape);
		return () => document.removeEventListener('keydown', closeModalOnEscape);
	});

	return (
		<div
			className={n.base(null, className)}
			aria-labelledby="modal-heading"
			aria-modal="true"
			role="dialog"
			aria-describedby="dialog-content"
			tabIndex={0}
			ref={modalRootRef}
		>
			<div className={n.child('head')}>
				<button onClick={closeModalFct} className={n.child('close-btn')}>
					<FontAwesomeIcon icon="times" />
					<span className="sr-only">Close modal</span>
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
export default GoodModal;
