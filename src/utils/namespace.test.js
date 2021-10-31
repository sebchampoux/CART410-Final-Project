import Namespace from "./namespace";

describe('Namespace', () => {
	const baseName = 'test-object';
	const namespace = new Namespace(baseName);

	it('should print base class correctly', () => {
		expect(namespace.base()).toBe(baseName);
	});

	it('should print base modifiers correctly', () => {
		const mods = ['mod-1', 'mod-2'];
		expect(namespace.base(mods)).toBe(`${baseName} ${baseName}--${mods[0]} ${baseName}--${mods[1]}`);
	});

	it('should print extra classes correctly', () => {
		expect(namespace.base(null, 'extra-class')).toBe(`${baseName} extra-class`);
	});

	it('should print childs base class correctly', () => {
		expect(namespace.child('a-child')).toBe(`${baseName}__a-child`);
		expect(namespace.child('another-child')).toBe(`${baseName}__another-child`);
	});

	it('should print childs modifiers correctly', () => {
		const child = 'the-child';
		const mods = ['mod-1', 'mod-2'];

		const childBase = `${baseName}__${child}`;
		const modExpected1 = `${childBase}--${mods[0]}`;
		const modExpected2 = `${childBase}--${mods[1]}`;
		expect(namespace.child(child, mods)).toBe(`${childBase} ${modExpected1} ${modExpected2}`);
	});

	it('should print extra classes in childs correctly', () => {
		const expected = `${baseName}__child ${baseName}__child--a-mod extra-class`;
		expect(namespace.child('child', ['a-mod'], 'extra-class')).toBe(expected);
	});
});
