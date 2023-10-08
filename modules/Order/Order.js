export class Order {
  static instance = null;

  constructor() {
    if (!Order.instance) {
      Order.instance = this;
      this.element = document.createElement('div');
      this.element.classList.add('order');
      this.isMoumted = false;
    }


    return Order.instance;
  }

  mount(elementMain) {
    if (this.isMoumted) {
      return
    }

    this.element.insertAdjacentHTML('beforeend', this.getHTML())
    elementMain.append(this.element)

    document.body.append(elementMain)
    this.isMoumted = true;
  }

  unmount() {
    this.element.remove();
    this.isMoumted = false;
  }

  getHTML() {
    return `
      <div class="order__header">
          <h2 class="order__header-title">Заказ успешно размещен</h2>
          <div class="order__header-price">20 000 ₽</div>
        </div>
        <div class="order__number">№43435</div>
        <div class="order__subtitle">Данные доставки</div>
        <ul class="order__info">
          <li class="order__info-item"><span>Получатель</span><span>Иванов Петр Александрович</span></li>
          <li class="order__info-item"><span>Телефон</span><span>+7 (737) 346 23 00</span></li>
          <li class="order__info-item"><span>E-mail</span><span>Ivanov84@gmail.com</span></li>
          <li class="order__info-item"><span>Адрес доставки</span><span>Москва, ул. Ленина, 21, кв. 33</span></li>
          <li class="order__info-item"><span>Способ оплаты</span><span>Картой при получении</span></li>
          <li class="order__info-item"><span>Способ получения</span><span>Доставка</span></li>
        </ul>
        <button class="order__btn">На главную</button>
    `
  }
}

/*

<section class="order">
      <div class="order__header">
        <h2 class="order__header-title">Заказ успешно размещен</h2>
        <div class="order__header-price">20 000 ₽</div>
      </div>
      <div class="order__number">№43435</div>
      <div class="order__subtitle">Данные доставки</div>
      <ul class="order__info">
        <li class="order__info-item"><span>Получатель</span><span>Иванов Петр Александрович</span></li>
        <li class="order__info-item"><span>Телефон</span><span>+7 (737) 346 23 00</span></li>
        <li class="order__info-item"><span>E-mail</span><span>Ivanov84@gmail.com</span></li>
        <li class="order__info-item"><span>Адрес доставки</span><span>Москва, ул. Ленина, 21, кв. 33</span></li>
        <li class="order__info-item"><span>Способ оплаты</span><span>Картой при получении</span></li>
        <li class="order__info-item"><span>Способ получения</span><span>Доставка</span></li>
      </ul>
      <button class="order__btn">На главную</button>
    </section>
*/