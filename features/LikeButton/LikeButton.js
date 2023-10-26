import { likeSvh } from "../likeSVG/likeSvg";

export class LikeButton {
	constructor(classElem) {
		// this.id = id;
		this.classElem = classElem;
	}

	create(id) {
		const btn = document.createElement('button');
		btn.classList.add(this.classElem);
		btn.dataset.id = id;

		likeSvh().then((svg) => {
			btn.append(svg);
		})

		// `
		// 	<svg width="16" height="14" fill="currentColor" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
		// 		<path
		// 			d="M8.41334 12.8733C8.18668 12.9533 7.81334 12.9533 7.58668 12.8733C5.65334 12.2133 1.33334 9.45998 1.33334 4.79332C1.33334 2.73332 2.99334 1.06665 5.04001 1.06665C6.25334 1.06665 7.32668 1.65332 8.00001 2.55998C8.67334 1.65332 9.75334 1.06665 10.96 1.06665C13.0067 1.06665 14.6667 2.73332 14.6667 4.79332C14.6667 9.45998 10.3467 12.2133 8.41334 12.8733Z"
		// 			stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round" />
		// 	</svg>
		// `;

		btn.addEventListener('click', () => {
			console.log('Добавить товар в избранное');
		})

		return btn;

	}
}
// const btnFavorite = `
// 			<button class="card__favorite" data-id="${this.id}">
// 				<svg width="16" height="14" fill="currentColor" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
// 					<path
// 						d="M8.41334 12.8733C8.18668 12.9533 7.81334 12.9533 7.58668 12.8733C5.65334 12.2133 1.33334 9.45998 1.33334 4.79332C1.33334 2.73332 2.99334 1.06665 5.04001 1.06665C6.25334 1.06665 7.32668 1.65332 8.00001 2.55998C8.67334 1.65332 9.75334 1.06665 10.96 1.06665C13.0067 1.06665 14.6667 2.73332 14.6667 4.79332C14.6667 9.45998 10.3467 12.2133 8.41334 12.8733Z"
// 						stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round" />
// 				</svg>
// 			</button>`;