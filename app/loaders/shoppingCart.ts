/* const BASKET_INITIAL_STATE = {
	id: null,
	email: null,
	currency: 'EUR',
	items: [],
	discount_total: 0.0,
	tax_total: 0.0,
	net_total: 0.0,
};

export const initBasket = () => async (dispatch) => {
		try {
			const basketFromLocalStorage =
				window.localStorage.getItem('active_basket');
			// TODO check if user is logged in -> set its basket to the active basket
			if (!basketFromLocalStorage) {
				window.localStorage.setItem(
					'active_basket',
					JSON.stringify(BASKET_INITIAL_STATE)
				);
			}
			const activeBasket = basketFromLocalStorage
				? JSON.parse(basketFromLocalStorage)
				: BASKET_INITIAL_STATE;
			dispatch({ type: 'INIT_BASKET', data: activeBasket });
		} catch (e) {
			console.log(e);
		}
	};

export const updateBasket = () => async (dispatch) => {
		try {
			const basketFromLocalStorage =
				window.localStorage.getItem('active_basket');
			// TODO check if user is logged in -> set its basket to the active basket
			if (!basketFromLocalStorage) {
				window.localStorage.setItem(
					'active_basket',
					JSON.stringify(BASKET_INITIAL_STATE)
				);
			}
			const activeBasket = basketFromLocalStorage
				? JSON.parse(basketFromLocalStorage)
				: BASKET_INITIAL_STATE;
			dispatch({ type: 'UPDATE_BASKET', data: activeBasket });
		} catch (e) {
			console.log(e);
		}
	};

export const addItemToCart = (product, variant, sVariant) => async (dispatch) => {
		try {
			// prolly not the cleanest solution, but it works
			const basketFromLocalStorage = JSON.parse(
				window.localStorage.getItem('active_basket')
			);
			let bool = false;
			let index;
			basketFromLocalStorage.items.forEach((p, i) => {
				if (bool) return;
				bool = p.variant.id === variant.id;
				if (bool) index = i;
			});
			if (bool) {
				const itemFromStorage = basketFromLocalStorage.items[index];
				itemFromStorage.quantity += 1;
				dispatch({
					type: 'ADD_TO_CART',
					data: { replaceIndex: index, itemFromStorage },
				});
			} else {
				const productToBeAdded = {
					id: product.id,
					variant,
					sVariant,
					title: product.title,
					description: product.description,
					short_description: product.short_description || null,
					categories: product.categories,
					images: variant.images,
					custom_fields: product.custom_fields,
					list_price: product.list_price,
					discount_amount: product.discount_amount,
					tax_amount: product.tax_amount,
					net_price: product.tax_amount,
					quantity: 1,
				};
				dispatch({ type: 'ADD_TO_CART', data: productToBeAdded });
			}
		} catch (e) {
			console.log(e);
		}
	}; */

	export {}