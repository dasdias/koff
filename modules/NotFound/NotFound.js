import { addContainer } from "../Main/addContainer";

export class NotFound {
  static instance = null;

  constructor() {
    if (!NotFound.instance) {
      NotFound.instance = this;
      this.element = document.createElement('section');
      this.element.classList.add('not-found');
      this.containerElement = addContainer(this.element, 'not-found__container');
      this.isMoumted = false;
    }

    return NotFound.instance;
  }

  mount(parent) {
    if (this.isMoumted) {
      return
    }
    this.containerElement.insertAdjacentHTML('afterbegin', this.getHTML())
    parent.append(this.element)
    this.isMoumted = true;
  }

  unmount() {
    this.element.remove();
    this.isMoumted = false;
  }

  getHTML() {
    return `
      <div class="not-found__wrap">
          <h2 class="not-found__title">Страница не найдена</h2>
          <p class="not-found__text">Через 5 секунд вы будите перенаправлены <a href="/" class="not-found__link">на
              главную страницу</a></p>
        </div>
      </div>
    `;
  }
}