import logoImage from '/img/logo.svg';

export const getLogo = (classLogo = 'header__link-logo') => {
	const logo = document.createElement('a');
	logo.classList.add(classLogo);
	logo.href = '/'

	const imgLogo = new Image();
	imgLogo.classList.add('header__logo');
	imgLogo.src = logoImage;
	imgLogo.alt = "Мебельный  маркет Koff";
	logo.append(imgLogo);
	return logo
}