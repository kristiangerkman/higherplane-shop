
import axios from 'axios';
import 'dotenv/config';
import mockProducts from './mockProducts';

type _custom_field = {
	name: string;
	value: string;
}
export type Variant = {
	id: string,
	purchasing_disabled: boolean,
	primary: boolean,
	sku: string,
	media: string[] | []
	custom_fields: _custom_field[],
	list_price: number | null,
	discount_amount: number | null,
	tax_amount: number | null,
}

export type Product = {
	id: string;
	name: string;
	description: string;
	short_description: string;
	width: number,
	height: number,
	depth: number,
	weight: number,
	categories: string[];
	base_price: number | null;
	tax_amount: number | null;
	net_price: number | null;
	promotion: string | null
  variants: Variant[];
}


const baseUrl = process.env.API_BASE_URL;

export async function getAllProducts(): Promise<Product[]> {
/* 	const res = await axios.get(`${baseUrl}/products`);
  let products: any = res.data;

	if (products.length < 4 && process.env.NODE_ENV === "development") {
		for (let i = res.data.length; i < 4; i++) {
			products.push(res.data[0]);
		}
	} */
	return new Promise((resolve) => resolve(mockProducts));
}


export async function getSingleProduct(id: string | undefined): Promise<Product> {
	// const res = await axios.get(`${process.env.API_BASE_URL}products/${id}`);
/* 	const res = await axios.get(`${baseUrl}/products`);
	const productMap:any = {}
	res.data.forEach((p:Product) => {
    const key = p.name.replace(/ /g, '-').toLowerCase()
		productMap[key] = p;
	}) */

  const productMap: any = {}
  mockProducts.forEach((p: Product) => {
    const key = p.name.replace(/ /g, '-').toLowerCase()
    productMap[key] = p;
  })

	if (!id) {
		throw new Response("Not found", {
			status: 404,
		});
	}

	return new Promise((resolve) => resolve(productMap[id]))

}
