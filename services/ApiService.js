import axios from "axios";
import { API_URL } from "../const";
// import { LocalStorage } from "./LocalStorage";
import { AccessKeyService } from "./StorageService";

export class ApiService {
	#apiUrl = API_URL;
	constructor() {
		this.accessKeyService = new AccessKeyService('accessKey');
		this.accessKey = this.accessKeyService.get();
		// this.accessKey = new LocalStorage().get("accessKey");
	}
	async getAccessKey() {
		try {
			if (!this.accessKey) {
				const response = await axios.get(`${this.#apiUrl}api/users/accessKey`)
				this.accessKey = response.data.accessKey;
				// localStorage.setItem("accessKey", this.accessKey);
				this.accessKeyService.set(this.accessKey);
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
				this.accessKeyService.delete();

				return this.getData(pathname, params);
			} else {
				console.log(error);
			}
		}
	}

	async getProducts(params = {}) {
		// if (params.list) {
		// 	params.list = params.list.join(",");
		// }
		return await this.getData("api/products", params);
	}
	// async getProducts(page = 1, limit = 12, list, category, q) {
	// 	return await this.getData('api/products', {
	// 		page, limit, list, category, q
	// 	});
	// }

	async getProductCategories() {
		return await this.getData('api/productCategories')
	}
	async getProductById() {
		return await this.getData(`api/products/${id}`)
	}
}