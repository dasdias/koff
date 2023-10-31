import { FavoriteService } from "../../services/StorageService";
import { likeSvh } from "../likeSVG/likeSvg";

export class LikeButton {
	constructor(classElem) {
		// this.id = id;
		this.classElem = classElem;
		this.favoriteService = new FavoriteService();
	}

	create(id) {
		const btn = document.createElement('button');
		btn.classList.add(this.classElem);
		btn.dataset.id = id;

		if (this.favoriteService.check(id)) {
			btn.classList.add(`${this.classElem}_active`);
		}

		btn.addEventListener('click', () => {
			if (this.favoriteService.check(id)) {
				this.favoriteService.remove(id);
				btn.classList.remove(`${this.classElem}_active`)
			} else {
				this.favoriteService.add(id);
				btn.classList.add(`${this.classElem}_active`);
			}
		})

		likeSvh().then((svg) => {
			btn.append(svg);
		})

		return btn;

	}
}