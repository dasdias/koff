export const likeSvh = async () => {
	// const likeUrl = new URL('./likeSvg.svg', import.meta.url);
	const responce = await fetch('/public/img/cart/likeSvg.svg');
	const svg = await responce.text();
	return new DOMParser().parseFromString(svg, 'image/svg+xml').querySelector('svg');
}