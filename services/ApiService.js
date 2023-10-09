import { API_URL } from "../const";

export class ApiService {
	#apiUrl = API_URL;
	constructor() {
		this.accessKey = localStorage.getItem("accessKey");
	}
}