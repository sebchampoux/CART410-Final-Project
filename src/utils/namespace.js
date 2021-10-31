export default class Namespace {
	constructor(baseName){
		this.baseName = baseName;
	}

	base(modifiers = null, extra = ''){
		if (!modifiers) {
			return extra ? `${this.baseName} ${extra}` : this.baseName;
		}
		return this.withModifiers(this.baseName, modifiers, extra);
	}

	child(subElementName, modifiers = null, extra = ''){
		const childBaseName = `${this.baseName}__${subElementName}`;
		if (!modifiers) {
			return extra ? `${childBaseName} ${extra}` : childBaseName;
		}
		return this.withModifiers(childBaseName, modifiers, extra);
	}

	// Utility, don't use
	withModifiers(name, modifiers, extra) {
		const result = [name];
		modifiers.forEach(mod => result.push(`${name}--${mod}`));
		if (extra) result.push(extra);
		return result.join(' ');
	}
}