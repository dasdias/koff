import { addContainer } from "../Main/addContainer";

export class Catalog {
	static instance = null;

	constructor() {
		if (!Catalog.instance) {
			Catalog.instance = this;
			this.element = document.createElement('nav');
			this.element.classList.add('catalog')
			this.containerElement = addContainer(this.element, 'catalog__container');
			this.isMoumted = false;
		}

		return Catalog.instance;
	}

	mount(parent, data) {
		if (this.isMoumted) {
			return
		}

		this.renderListElem(data)

		parent.prepend(this.element)
		this.isMoumted = true;
	}

	unmount() {
		this.element.remove();
		this.isMoumted = false;
	}

	renderListElem(data) {
		const listElem = document.createElement('ul');
		listElem.classList.add('catalog__list');

		const listItens = data.map((item) => {
			const listItemElem = document.createElement('li');
			listItemElem.classList.add('catalog__item')
			const link = document.createElement('a');
			link.classList.add('catalog__link');
			link.href = `/category?slug=${item}`;
			link.textContent = item;

			listElem.append(link)
			return listItemElem
		});

		listElem.append(...listItens)

		this.containerElement.append(listElem);
	}
}