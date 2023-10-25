import { getLogo } from "../../features/Logo/logo";
import { addContainer } from "../Main/addContainer";
import logoImage from '/img/logo.svg'

export class Footer {
	static instance = null;

	constructor() {
		if (!Footer.instance) {
			Footer.instance = this;
			this.element = document.createElement('footer');
			this.element.classList.add('footer');
			this.containerElement = addContainer(this.element, 'footer__container');
			this.isMoumted = false;
		}


		return Footer.instance;
	}

	mount() {
		if (this.isMoumted) {
			return
		}
		const logo = getLogo('footer__logo');


		this.containerElement.append(logo)

		this.containerElement.insertAdjacentHTML('beforeend', this.getHTML());
		document.body.append(this.element)
		this.isMoumted = true;
	}

	unmount() {
		this.element.remove();
		this.isMoumted = false;
	}

	// getLogo() {
	// 	const logo = document.createElement('a');
	// 	logo.classList.add('footer__logo');
	// 	logo.href = '/'

	// 	const imgLogo = new Image();
	// 	// imgLogo.classList.add('header__logo');
	// 	imgLogo.src = logoImage;
	// 	imgLogo.alt = "Мебельный  маркет Koff";
	// 	logo.append(imgLogo);
	// 	return logo
	// }

	getHTML() {
		return `
      <div class="footer__contacts contacts">
        <a class="contacts__phone" href="tel:+79398391297">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.48566 1.54445L5.59251 1.21074C5.95781 1.10078 6.35064 1.12746 6.69772 1.2858C7.0448 1.44415 7.32242 1.72334 7.4788 2.07131L8.2548 3.79703C8.38948 4.09641 8.42702 4.43046 8.36215 4.75227C8.29727 5.07408 8.13324 5.36749 7.89309 5.59131L6.71194 6.69188C6.55366 6.84217 6.67366 7.42788 7.25194 8.43017C7.8308 9.43303 8.27823 9.8296 8.48451 9.76788L10.0319 9.29474C10.3456 9.1988 10.6814 9.20341 10.9923 9.30794C11.3032 9.41246 11.5737 9.61166 11.7657 9.8776L12.8685 11.4062C13.0913 11.7148 13.1944 12.0939 13.1588 12.4728C13.1232 12.8518 12.9512 13.205 12.6748 13.4667L11.8222 14.2742C11.547 14.5348 11.2076 14.7178 10.8385 14.8044C10.4695 14.891 10.0841 14.8782 9.72166 14.7673C7.93537 14.2205 6.28109 12.5976 4.73651 9.9216C3.18851 7.2416 2.60394 4.98103 3.01137 3.13417C3.09355 2.76203 3.27348 2.41853 3.53263 2.1391C3.79177 1.85966 4.12075 1.65439 4.48566 1.54445Z"
              fill="white" />
          </svg>
          <span>+7 (939) 839 12 97</span></a>
        <ul class="contacts__list">
          <li class="contacts__item">
            <a class="contacts__link" href="#" target="_blank">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.99995 0.320068C3.75835 0.320068 0.319946 3.75847 0.319946 8.00007C0.319946 12.2417 3.75835 15.6801 7.99995 15.6801C12.2415 15.6801 15.6799 12.2417 15.6799 8.00007C15.6799 3.75847 12.2415 0.320068 7.99995 0.320068ZM10.9535 8.98487C10.9535 8.98487 11.6327 9.65527 11.7999 9.96647C11.8047 9.97287 11.8071 9.97927 11.8087 9.98247C11.8767 10.0969 11.8927 10.1857 11.8591 10.2521C11.8031 10.3625 11.6111 10.4169 11.5455 10.4217H10.3455C10.2623 10.4217 10.0879 10.4001 9.87675 10.2545C9.71435 10.1409 9.55435 9.95447 9.39835 9.77287C9.16555 9.50247 8.96395 9.26887 8.76075 9.26887C8.73494 9.26882 8.70929 9.27287 8.68475 9.28087C8.53115 9.33047 8.33435 9.54967 8.33435 10.1337C8.33435 10.3161 8.19035 10.4209 8.08875 10.4209H7.53915C7.35195 10.4209 6.37675 10.3553 5.51275 9.44407C4.45515 8.32807 3.50315 6.08967 3.49515 6.06887C3.43515 5.92407 3.55915 5.84647 3.69435 5.84647H4.90635C5.06795 5.84647 5.12075 5.94487 5.15755 6.03207C5.20075 6.13367 5.35915 6.53767 5.61915 6.99207C6.04075 7.73287 6.29915 8.03367 6.50635 8.03367C6.5452 8.03321 6.58336 8.02333 6.61755 8.00487C6.88795 7.85447 6.83755 6.89047 6.82555 6.69047C6.82555 6.65287 6.82475 6.25927 6.68635 6.07047C6.58715 5.93367 6.41835 5.88167 6.31595 5.86247C6.35739 5.80528 6.412 5.7589 6.47515 5.72727C6.66075 5.63447 6.99515 5.62087 7.32715 5.62087H7.51195C7.87195 5.62567 7.96475 5.64887 8.09515 5.68167C8.35915 5.74487 8.36475 5.91527 8.34155 6.49847C8.33435 6.66407 8.32715 6.85127 8.32715 7.07207C8.32715 7.12007 8.32475 7.17127 8.32475 7.22567C8.31675 7.52247 8.30715 7.85927 8.51675 7.99767C8.54409 8.01481 8.57568 8.02396 8.60795 8.02407C8.68075 8.02407 8.89995 8.02407 9.49355 7.00567C9.67661 6.67788 9.8357 6.33725 9.96955 5.98647C9.98155 5.96567 10.0167 5.90167 10.0583 5.87687C10.089 5.86122 10.1231 5.85326 10.1575 5.85367H11.5823C11.7375 5.85367 11.8439 5.87687 11.8639 5.93687C11.8991 6.03207 11.8575 6.32247 11.2071 7.20327L10.9167 7.58647C10.3271 8.35927 10.3271 8.39847 10.9535 8.98487Z"
                  fill="white" />
              </svg>
            </a>
          </li>
          <li class="contacts__item">
            <a class="contacts__link" href="#" target="_blank">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.66671 9.99992L10.1267 7.99992L6.66671 5.99992V9.99992ZM14.3734 4.77992C14.46 5.09325 14.52 5.51325 14.56 6.04658C14.6067 6.57992 14.6267 7.03992 14.6267 7.43992L14.6667 7.99992C14.6667 9.45992 14.56 10.5333 14.3734 11.2199C14.2067 11.8199 13.82 12.2066 13.22 12.3733C12.9067 12.4599 12.3334 12.5199 11.4534 12.5599C10.5867 12.6066 9.79337 12.6266 9.06004 12.6266L8.00004 12.6666C5.20671 12.6666 3.46671 12.5599 2.78004 12.3733C2.18004 12.2066 1.79337 11.8199 1.62671 11.2199C1.54004 10.9066 1.48004 10.4866 1.44004 9.95325C1.39337 9.41992 1.37337 8.95992 1.37337 8.55992L1.33337 7.99992C1.33337 6.53992 1.44004 5.46659 1.62671 4.77992C1.79337 4.17992 2.18004 3.79325 2.78004 3.62659C3.09337 3.53992 3.66671 3.47992 4.54671 3.43992C5.41337 3.39325 6.20671 3.37325 6.94004 3.37325L8.00004 3.33325C10.7934 3.33325 12.5334 3.43992 13.22 3.62659C13.82 3.79325 14.2067 4.17992 14.3734 4.77992Z"
                  fill="white" />
              </svg>
            </a>
          </li>
          <li class="contacts__item">
            <a class="contacts__link" href="#">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM8.287 5.906C7.509 6.23 5.953 6.9 3.621 7.916C3.243 8.066 3.044 8.214 3.026 8.358C2.996 8.601 3.301 8.697 3.716 8.828L3.891 8.883C4.299 9.016 4.849 9.171 5.134 9.177C5.394 9.183 5.683 9.077 6.002 8.857C8.181 7.386 9.306 6.643 9.376 6.627C9.426 6.615 9.496 6.601 9.542 6.643C9.589 6.684 9.584 6.763 9.579 6.784C9.549 6.913 8.352 8.025 7.733 8.601C7.54 8.781 7.403 8.908 7.375 8.937C7.31334 9.00001 7.25067 9.06202 7.187 9.123C6.807 9.489 6.523 9.763 7.202 10.211C7.529 10.427 7.791 10.604 8.052 10.782C8.336 10.976 8.62 11.169 8.988 11.411C9.081 11.471 9.171 11.536 9.258 11.598C9.589 11.834 9.888 12.046 10.255 12.012C10.469 11.992 10.69 11.792 10.802 11.192C11.067 9.775 11.588 6.706 11.708 5.441C11.7153 5.33584 11.711 5.2302 11.695 5.126C11.6856 5.04192 11.6449 4.96446 11.581 4.909C11.49 4.84619 11.3815 4.81365 11.271 4.816C10.971 4.821 10.508 4.982 8.287 5.906Z"
                  fill="white" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <ul class="footer__developer-list">
        <li class="footer__developer-item">
          Designer:
          <a class="footer__developer-link" href="#">Anastasia Ilina</a>
        </li>
        <li class="footer__developer-item">
          Developer::
          <a class="footer__developer-link" href="https://t.me/dasdias">Alex</a>
        </li>
      </ul>
      <p class="footer__copyright">© Koff, 2023</p>
    `
	}

}