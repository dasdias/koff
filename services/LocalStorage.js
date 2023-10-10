export class LocalStorage {
  constructor() {
    // this.accessKey = localStorage.getItem("accessKey");
    // console.log('this.accessKey', this.accessKey);
  }

  get(key) {
    return localStorage.getItem(key);
  }

  set(key, value) {
    localStorage.setItem(key, value);
  }

  delete(key) {
    localStorage.removeItem(key);
  }

}