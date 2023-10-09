import { API_URL } from "../../const";
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
    const listItems = data.map((item) => {
      const listItemElem = document.createElement('li')
      listItemElem.innerHTML = this.getHTMLTemplateListItem(item);

      return listItemElem;
    });
    listElem.append(...listItems);
    this.containerElement.append(listElem);
  }

  getHTMLTemplateListItem({ id, images: [image], price, name: title }) {
    return `
      <article class="goods__card card">
        <a class="card__link card__link_img" href="/product/${id}">
          <img class="card__images" src="${API_URL}${image}" alt="${title}">
        </a>
        <div class="card__info">
          <h3 class="card__title">
            <a class="card__link" href="/product/${id}">
              ${title}
            </a>
          </h3>
          <p class="card__price">${price.toLocaleString()}&nbsp;₽</p>
        </div>
        <button class="card__btn" data-id="${id}" >В корзину</button>
        <button class="card__favorite" data-id="${id}>
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.41334 12.8733C8.18668 12.9533 7.81334 12.9533 7.58668 12.8733C5.65334 12.2133 1.33334 9.45998 1.33334 4.79332C1.33334 2.73332 2.99334 1.06665 5.04001 1.06665C6.25334 1.06665 7.32668 1.65332 8.00001 2.55998C8.67334 1.65332 9.75334 1.06665 10.96 1.06665C13.0067 1.06665 14.6667 2.73332 14.6667 4.79332C14.6667 9.45998 10.3467 12.2133 8.41334 12.8733Z"
              fill="white" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </article>
    `
  }
}