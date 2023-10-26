export class CartButton {
	constructor(classElem, text) {
		this.classElem = classElem;
		this.text = text;
	}

	create(id) {
		const btn = document.createElement('button');
		btn.classList.add(this.classElem);
		btn.dataset.id = id;
		btn.textContent = this.text;
		btn.addEventListener('click', () => {
			console.log('Добавить товар в корзину');
		})
		return btn;
	}
}