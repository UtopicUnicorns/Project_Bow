class componentConstruct {
	constructor() {
		this.menuBOOL = false;
		this.buttonBOOL = false;

		this.data = {
			type: 1,
			components: [],
		};
	}

	get output() {
		return this.data;
	}

	menu(menudata) {
		if (!menudata) return 'No information.';

		if (this.buttonBOOL) return this;
		this.menuBOOL = true;

		let menuInfo = {
			custom_id: menudata.custom_id,
			placeholder: menudata.place_holder,
			min_values: menudata.min_val,
			max_values: menudata.max_val,
			options: [],
			type: 3,
		};

		this.data.components.push(menuInfo);

		return this;
	}

	entry(entrydata) {
		if (!entrydata) return 'No information.';

		if (entrydata.emoji) {
			var entryInfo = {
				label: entrydata.label,
				value: entrydata.value,
				description: entrydata.description,
				default: entrydata.default,
				emoji: { name: entrydata.emoji.name, id: entrydata.emoji.id, animated: entrydata.emoji.boolean },
			};
		} else {
			var entryInfo = {
				label: entrydata.label,
				value: entrydata.value,
				description: entrydata.description,
				default: entrydata.default,
			};
		}

		if (!entrydata.emoji) delete entryInfo['emoji'];
		if (entrydata.emoji) {
			if (!entrydata.emoji.name) delete entryInfo.emoji['name'];
			if (!entrydata.emoji.id) delete entryInfo.emoji['id'];
			if (!entrydata.emoji.animated) delete entryInfo.emoji['animated'];
		}
		if (!entrydata.default) delete entryInfo['default'];
		if (!entrydata.description) delete entryInfo['description'];
		if (!entrydata.value) delete entryInfo['value'];
		if (!entrydata.label) delete entryInfo['label'];
		if (this.data.components[0] && this.data.components[0].options) this.data.components[0].options.push(entryInfo);

		return this;
	}

	button(buttondata) {
		if (this.menuBOOL) return this;
		this.buttonBOOL = true;

		if (buttondata.emoji) {
			var buttonInfo = {
				label: buttondata.label,
				custom_id: buttondata.custom_id,
				style: buttondata.style,
				disabled: buttondata.disabled,
				url: buttondata.url,
				emoji: { name: buttondata.emoji.name, id: buttondata.emoji.id, animated: buttondata.emoji.boolean },
				type: 2,
			};

			if (!buttondata.emoji.id) delete buttonInfo.emoji['id'];
			if (!buttondata.emoji.name) delete buttonInfo.emoji['name'];
			if (!buttondata.emoji.animated) delete buttonInfo.emoji['animated'];
		} else {
			var buttonInfo = {
				label: buttondata.label,
				custom_id: buttondata.custom_id,
				style: buttondata.style,
				disabled: buttondata.disabled,
				url: buttondata.url,
				type: 2,
			};
		}

		if (!buttondata.label) delete buttonInfo['label'];
		if (!buttondata.custom_id) delete buttonInfo['custom_id'];
		if (!buttondata.style) delete buttonInfo['style'];
		if (!buttondata.disabled) delete buttonInfo['disabled'];
		if (!buttondata.url) delete buttonInfo['url'];

		this.data.components.push(buttonInfo);

		return this;
	}
}

module.exports = componentConstruct;
