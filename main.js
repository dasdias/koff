import "normalize.css"
import './style.scss'
// import Swiper JS
import { Navigation, Thumbs } from 'swiper/modules';
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'


var swiperThumbnails = new Swiper(".product__slider-thumbnails", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".product__slider-main", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".product__arrow_next",
    prevEl: ".product__arrow_prev",
  },
  modules: [Navigation, Thumbs],
  thumbs: {
    swiper: swiperThumbnails,
  },
});

// document.querySelector('#app').innerHTML = `
//   <div>
//    <h1>Hello js</h1>
//   </div>
// `