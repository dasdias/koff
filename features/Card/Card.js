import { API_URL } from "../../const";
import { CartButton } from "../CartButton/CartButton";
import { LikeButton } from "../LikeButton/LikeButton.js";

export class Card {
	constructor(id, image, title, price) {
		this.id = id;
		this.image = image;
		this.title = title;
		this.price = price;
		this.cartButton = new CartButton('card__btn', 'В корзину');
		this.LikeButton = new LikeButton('card__favorite');
	}

	create() {
		const article = document.createElement('article');
		article.classList.add('goods__card', 'card');

		const link = document.createElement('a')
		link.classList.add('card__link', 'card__link_img');
		link.href = `/product/${this.id}`;

		const img = document.createElement('img');
		img.classList.add('card__images');
		img.src = `${API_URL}${this.image}`;
		img.alt = this.title;

		link.append(img);

		const info = document.createElement('div');
		info.classList.add('card__info');

		const title = document.createElement('h3');
		title.classList.add('card__title');

		const titleLink = document.createElement('a');
		titleLink.classList.add('card__link');
		titleLink.href = `/product/${this.id}`;
		titleLink.textContent = this.title;
		title.append(titleLink);

		const price = document.createElement('p');
		price.classList.add('card__price');
		price.textContent = `${this.price}&nbsp;₽`;

		info.append(title);

		const btnCart = this.cartButton.create(this.id);
		const btnFavorite = this.LikeButton.create(this.id);

		article.append(link, info, btnCart, btnFavorite);

		return article;

	}

}