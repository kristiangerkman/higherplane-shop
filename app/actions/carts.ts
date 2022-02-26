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

// this whole shabang should propably be done via some session token

export const validateCart = async () => {
	const cartId = window.localStorage.getItem('cart_id');
	if (!cartId) {
		const newCart = await _createCart('36b9b2cb-4f34-4139-80eb-ca91f9fafee0', 999)
		window.localStorage.setItem('cart_id', newCart.id);
		return newCart;
	}
	return _getCart(cartId);
}

export const addItemToCart = async (variantId: string) => {

}

export const updateVariantQuantityInCart = async (variantId: string, newQuantity: number) => {

};

export const deleteVariantFromCart = async (variantId: string) => {

}

export const changeVariantInCart = async (variantId: string, newVariantId: string) => {

}

export const emptyCurrentCart = async () => {
	return null;
}

export {}