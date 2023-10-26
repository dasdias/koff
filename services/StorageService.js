class StorageService {
	constructor(key) {
		this.key = key;
	}

	get() {
		const value = localStorage.getItem(this.key);
		if (value) {
			return value;
		}
		return null;
	}

	set(data) {
		if (typeof data === 'object') {
			data = JSON.stringify(data);

		}
		localStorage.setItem(this.key, data);
	}

	delete() {
		localStorage.removeItem(this.key);
	}
}

export class FavoriteService extends StorageService {

}