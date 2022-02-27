import SpacedHeader from "~/components/SpacedHeader";
import CartItem from "~/components/CartProduct";
import { useLoaderData } from "remix";
import { ItemFromCart } from "~/actions/carts";
import React from "react";

export const loader = () => {
	console.log('Load cart with all of it\'s products')
	// get cart
	// const products  = cart.items
	const items = [
		{
			product_id: "2722e02d-3988-47aa-b47a-5eeb49511ea4",
			variant_id: "36b9b2cb-4f34-4139-80eb-ca91f9fafee0",
			name: "T-Shirt",
			description: "Superb quality - 100% cotton (hand-picked in Etiopia",
			short_description: "Superb quality",
			purchasing_disabled: false,
			primary: true,
			sku: "asdasdasd",
			media: [
				"https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2652-600x800.jpg",
				"https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2401-600x800.jpg",
				"https://higherplane-images.s3.eu-west-1.amazonaws.com/images/FD_Webshop_DSC_2641-600x800.jpg"
			],
			custom_fields: [ ],
			list_price: 14.95,
			discount_amount: null,
			tax_amount: null,
			quantity: 1
		}
	]
	return { items, currency: 'EUR' };
};

const Items = ({ is, c }:{is:[ItemFromCart], c:string}) => {
	if (is?.length > 0) {
		return (
		<div>
		{
			is.map((p:ItemFromCart) => {
				return (
				<React.Fragment key={p.variant_id}>
					<CartItem item={p} currency={c} />
				</React.Fragment>
				);
			})
		}
		</div>
		)
	}	
	return (
	<div className="bg-slate-500 border-none rounded-md h-12 flex flex-col justify-center items-center">
		<p>Shopping cart is empty </p>
	</div>);
}
		
export default function Cart() {
const { items, currency } = useLoaderData()
return (
	<div className="pl-3 pr-3 mb-4">
	<SpacedHeader text="SHOPPING CART"/>
	<Items is={items} c={currency} />
	</div>
	);
}
			