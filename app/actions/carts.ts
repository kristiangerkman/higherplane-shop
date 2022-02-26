import axios from 'axios'
import 'dotenv/config';
import type { Product } from '../loaders/products'

export type Cart = {
	id: string,
	create_at: string,
	updated_at: string,
	email: string | null,
	currency: string,
	items: Product[],
	list_total: number,
	discount_total: number,
	tax_total: number,
	cart_total: number,
}
const _baseUrl = process.env.API_BASE_URL

const _getCart = async (id: string) => {
	const res = await axios.get(`${_baseUrl}/carts/${id}`)
	const cart = res.data;
	return cart;
}

// TODO: RIGHT NOW there is requirement to add variant when creating a cart, maybe look into ways of creating cart per new session and then do some clean up for those
// idea is to initialize the cart at the page load, and then just update that (for guests) 
const _createCart = async (variant_id?: string, quantity?: number): Promise<Cart> => {
	const tmp = {
		items: [
			{
				variant_id,
				quantity
			}
		]
	};

	const res = await axios.post(`${_baseUrl}/carts`, tmp)
	const cart = res.data;
	return cart;
}


const _addItemToCart = async (variantId: string, cartId: string, quantity?: number) => {
	try {
		await axios.post(`${_baseUrl}/carts/${cartId}/items`, { variant_id: variantId, quantity: quantity || 1});
	} catch (e) {
		console.log(e)
	}
}

const _updateItemQuantity = async (variantId: string, cartId: string, quantity: number) => {
	try {
		await axios.put(`${_baseUrl}/carts/${cartId}/items/${variantId}`, {quantity: quantity});
	} catch (e) {
		console.log(e)
	}
}

const _removeItemFromCart = async (variantId: string, cartId: string) => {
	try {
		await axios.delete(`${_baseUrl}/carts/${cartId}/items/${variantId}`);
	} catch (e) {
		console.log(e)
	}
}


export const validateCartHandler = async (variantId?:string): Promise<{ cart:Cart, isNewCart: boolean}> => {
	const cartId = window.localStorage.getItem('cart_id');
	if (!cartId) {
		const newCart = await _createCart('36b9b2cb-4f34-4139-80eb-ca91f9fafee0', 999)
		window.localStorage.setItem('cart_id', newCart.id);
		return { cart: newCart, isNewCart: true};
	}
	return { cart: await _getCart(cartId), isNewCart: false };
}

export const addItemToCartHandler = async (variantId: string) => {
	try {
		const { cart, isNewCart } = await validateCartHandler(variantId);
		if (isNewCart) return;
		_addItemToCart(variantId, cart.id);
	} catch (e) {
		console.log(e)
	}
}

export const updateItemQuantityInCartHandler = async (variantId: string, newQuantity: number) => {
	try {
		const { cart } = await validateCartHandler(variantId);
		_updateItemQuantity(variantId, cart.id, newQuantity);
	} catch (e) {
		console.log(e)
	}
};

export const removeItemFromCartHandler = async (variantId: string) => {
	try {
		const { cart } = await validateCartHandler(variantId);
		_removeItemFromCart(variantId, cart.id);
	} catch (e) {
		console.log(e)
	}
}

export const changeItemInCartHandler = async (variantId: string, newVariantId: string) => {
	// not sure if this is needed..

	// basically just remove the current one and add the new one .. use case would be to update the variant from cart page
}

export const emptyCurrentCartHandler = async () => {
	
	// not sure if needed .. would be nice for debugging purposes
	return null;
}

export {}