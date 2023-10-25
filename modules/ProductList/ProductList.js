import { API_URL } from "../../const";
import { Card } from "../../features/Card/Card";
import { addContainer } from "../Main/addContainer";

export class ProductList {
	static instance = null;

	constructor() {
		if (!ProductList.instance) {
			ProductList.instance = this;
			this.element = document.createElement('section');
			this.element.classList.add('goods')
			this.containerElement = addContainer(this.element, 'goods__container');
			this.isMoumted = false;

			this.addEvents()
		}

		return ProductList.instance;
	}

	mount(parent, data, title) {
		// if (this.isMoumted) {
		//   return
		// }
		this.containerElement.textContent = '';

		const titleElem = document.createElement('h2')
		titleElem.textContent = title ? title : 'Список товаров';
		titleElem.className = title ? 'goods__title' : 'goods__title visually-hidden';

		this.containerElement.append(titleElem);

		this.updateListElem(data)

		if (this.isMoumted) {
			return;
		}

		parent.append(this.element)
		this.isMoumted = true;
	}

	unmount() {
		this.element.remove();
		this.isMoumted = false;
	}

	addEvents() { }
	updateListElem(data = []) {
		const listElem = document.createElement('ul');
		listElem.classList.add('goods__list');
		const listItems = data.map(({ id, images: [image], price, name: title }) => {
			const listItemElem = document.createElement('li')
			listItemElem.append(new Card(id, image, title, price).create());

			console.log(listItemElem);
			return listItemElem;
		});
		listElem.append(...listItems);
		this.containerElement.append(listElem);
	}


}