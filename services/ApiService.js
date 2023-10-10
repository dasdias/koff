import axios from "axios";
import { API_URL } from "../const";
import { LocalStorage } from "./LocalStorage";

export class ApiService {
  #apiUrl = API_URL;
  constructor() {
    // this.accessKey = localStorage.getItem("accessKey");
    this.accessKey = new LocalStorage().get("accessKey");
    // console.log(new LocalStorage("accessKey").get("accessKey"));
  }

  async getAccessKey() {
    try {
      if (!this.accessKey) {
        const response = await axios.get(`${this.#apiUrl}api/users/accessKey`)
        this.accessKey = response.data.accessKey;
        // localStorage.setItem("accessKey", this.accessKey);
        new LocalStorage().set("accessKey", this.accessKey);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getData(pathname, params = {}) {
    if (!this.accessKey) {
      await this.getAccessKey();
    }
    try {
      const response = await axios.get(`${this.#apiUrl}${pathname}`, {
        headers: {
          Authorization: `Bearer ${this.accessKey}`,
        },
        params,
      })

      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        this.accessKey = null;
        // localStorage.removeItem("accessKey");
        new LocalStorage().delete("accessKey");

        return this.getData(pathname, params);
      } else {
        console.log(error);
      }
    }
  }

  async getProducts(page = 1, limit = 12, list, category, q) {
    return await this.getData('api/products', {
      page, limit, list, category, q
    });
  }

  async getProductCategories() {
    return await this.getData('api/productCategories')
  }
  async getProductById() {
    return await this.getData(`api/products/${id}`)
  }
}