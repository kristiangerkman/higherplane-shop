import SpacedHeader from "~/components/SpacedHeader";
import CartProduct from "~/components/CartProduct";
import { useLoaderData } from "remix";
import { Product } from "~/loaders/products";

export const loader = () => {
	console.log('Load cart with all of it\'s products')
	
	return { products: [] };
};

export default function About() {
	const { products } = useLoaderData()
	return (
		<div className="pl-3 pr-3">
			<SpacedHeader text="SHOPPING CART"/>
			{products?.length > 0 ? (
				products.map((p:Product) => {
					console.log(p);
				})) : "Shopping cart is empty"
			}
		</div>
	);
}