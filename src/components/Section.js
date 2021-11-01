import Namespace from "../utils/namespace";

const n = new Namespace('section');

const Section = ({
	children,
	headText,
}) => (
	<section className={n.base(null)}>
		<h2 className={n.child('head')}>{headText}</h2>
		<div className={n.child('row', null, 'row')}>
			{children}
		</div>
	</section>
);
export default Section;
