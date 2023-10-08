export class Main {
  static instance = null;

  constructor() {
    if (!Main.instance) {
      Main.instance = this;
      this.element = document.createElement('main');
      this.isMoumted = false;
    }

    return Main.instance;
  }

  mount() {
    if (this.isMoumted) {
      return
    }

    document.body.append(this.element)
    this.isMoumted = true;
  }

  unmount() {
    this.element.remove();
    this.isMoumted = false;
  }

  element() {
    if (this.isMoumted) {
      return
    }
    this.isMoumted = true;
    return Main.instance;
  }
}