export class CartButton {
	constructor(id) {
		this.id = id;
	}

	create() {
		const btn = document.createElement('button');
		btn.classList.add('card__btn');
		btn.dataset.id = this.id;
		btn.textContent = 'В корзину';
		return btn;
	}
}