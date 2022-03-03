import { useState } from "react";
import { Form, json, Links, LoaderFunction, Meta, Scripts, useLoaderData, useParams } from "remix";
import Button from "~/components/Button";
import InputField from "~/components/InputField";
import ProductRow from "~/components/ProductRow";
import ProductScrollingImages from "~/components/ProductScrollingImages";
import SpacedHeader from "~/components/SpacedHeader";
import { getAllProducts, Product } from "~/loaders/products";
import Dropdown from "~/components/Dropdown";

export const loader: LoaderFunction = async ({ params }) => {
	const products = await getAllProducts();

	return {product: products.filter((p) => p.id === params.id)[0], products}

};


export default function AllProducts() {
	const [tmp, setTmp] = useState({label: '', value: ''});
	const [tmp1, setTmp1] = useState({label: '', value: ''});
	// I guess this should happen inside loader and then use the filtered data in this function
	const data = useLoaderData<{product: Product, products: Product[]}>();
	const { product, products } = data
	const short_desc = product.short_description.split('\n');
	// not like this
	return (
    <div className="flex flex-col space-y-3">
		<ProductScrollingImages images={product.variants[0].media} />
		<div className="p-3" >
			<div className="mb-4">
				<p className="text-spaced font-bold">{product.name}</p>
				<p className='text-small font-small underline'>${Number(product.base_price).toFixed(2)}</p>
			</div>
			<div className="mb-3">
				<Dropdown title="SIZE" setter={setTmp} initialValue={{ value: "L", label: 'L'}} values={[{ value: "L", label: 'L'}, { value: "M", label: 'M'}]} />
			</div>
			<div className="mb-3">
				<Dropdown title="COLOR" setter={setTmp1} initialValue={{ value: "WHITE", label: 'WHITE'}} values={[{ value: "WHITE", label: 'WHITE'}, { value: "BLACK", label: 'BLACK'}]} />
			</div>
			<div className="mb-4">
				<Form action="/cart">
					<Button text="ADD TO CART" />
				</Form>
			</div>
			<div className="mb-8">
				<ul className="list-disc pl-5">
					{short_desc.map((c, i) => <li key={i} ><p className='text-small font-small break-words whitespace-pre-wrap uppercase' >{c}</p></li>)}
				</ul>
			</div>

		<ProductRow label="SUMMER VIBES" linkText="SHOW MORE" linkTo="/products" max={4} products={products}/>
		</div>
    </div>
  );
}

export function ErrorBoundary({ error }:any) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
        <Scripts />
      </body>
    </html>
  );
}