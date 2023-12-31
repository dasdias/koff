import "normalize.css"
import './style.scss'
import Navigo from "navigo";
import { Header } from "./modules/Header/Header";
import { Main } from "./modules/Main/Main";
import { Footer } from "./modules/Footer/Footer";
import { Order } from "./modules/Order/Order";
import { ProductList } from "./modules/ProductList/ProductList";
import { ApiService } from "./services/ApiService";
import { Catalog } from "./modules/Catalog/Catalog";
import { NotFound } from "./modules/NotFound/NotFound";
import { FavoriteService } from "./services/StorageService";

const productSlider = () => {
	Promise.all([
		import('swiper/modules'),
		import('swiper'),
		import('swiper/css')
	]).then(([{ Navigation, Thumbs }, Swiper]) => {

		const swiperThumbnails = new Swiper.default(".product__slider-thumbnails", {
			spaceBetween: 10,
			slidesPerView: 4,
			freeMode: true,
			watchSlidesProgress: true,
		});

		const swiper2 = new Swiper.default(".product__slider-main", {
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

	})
}

const init = () => {
	const api = new ApiService();
	const router = new Navigo('/', { linksSelector: 'a[href^="/"]' });


	new Header().mount();
	new Main().mount();
	new Footer().mount();

	api.getProductCategories().then((data) => {
		new Catalog().mount(new Main().element, data);
		router.updatePageLinks();
	})


	productSlider();


	router.on("/", async () => {
		const products = await api.getProducts();
		new ProductList().mount(new Main().element, products, "Товары")
		router.updatePageLinks();
	}, {
		leave(done) {
			new ProductList().unmount()
			done()
		},
		already() {

		}
	})
		.on("/category", async ({ params: { slug } }) => { // slug - это то, что в search параметре
			const { data: products } = await api.getProducts({ category: slug }); // data: products - переименовываем переменную
			new ProductList().mount(new Main().element, products, slug)
			router.updatePageLinks();
		}, {
			leave(done) {
				new ProductList().unmount()
				done()
			}
		})
		.on("/favorite", async () => {
			const favorite = new FavoriteService().get();
			const { data: product } = await api.getProducts({ list: favorite.join(",") });
			new ProductList().mount(new Main().element, product, "Избранное", 'Вы ничего не добавили в избранное, пожалуйста, добавьте что-нибудь...')
			router.updatePageLinks();
		}, {
			leave(done) {
				new ProductList().unmount()
				done()
			}
		})
		.on("/search", () => {
			console.log('search');
		})
		.on("/product/:id", (obj) => {
			console.log(obj);
		})
		.on("/cart", () => {
			console.log('cart');
		})
		.on("/order", () => {
			new Order().mount(new Main().element);
			console.log('order');
		})
		.notFound(() => {
			new NotFound().mount(new Main().element)
			setTimeout(() => {
				router.navigate('/');
			}, 5000);
		}, {
			leave(done) {
				new Main().element.textContent = '';
				done()
			}
		})
	router.resolve();
	new Footer().mount();
}

init();