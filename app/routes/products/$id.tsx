import { useState } from "react";
import { Form, json, Links, LoaderFunction, Meta, Scripts, useLoaderData, useParams } from "remix";
import Button from "~/components/Button";
import InputField from "~/components/InputField";
import ProductRow from "~/components/ProductRow";
import ProductScrollingImages from "~/components/ProductScrollingImages";
import SpacedHeader from "~/components/SpacedHeader";
import { getAllProducts, getSingleProduct, Product, Variant } from "~/loaders/products";
import Dropdown from "~/components/Dropdown";

const mapVariants = (p:Product) => {

	const variantMap:any = {};
	const availableColors:any = {};
	let primaryVariant:Variant | undefined;

	p.variants.forEach((v) => {
		let color = v.custom_fields.filter(c => c.name === "color")
		let size = v.custom_fields.filter(c => c.name === "size")

		if (color[0]?.value && size[0]?.value) {
			if (!availableColors[color[0]?.value]) availableColors[color[0]?.value] = [];
			availableColors[color[0]?.value].push(size[0]?.value);
			
			variantMap[`${color[0]?.value}_${size[0]?.value}`.toUpperCase()] = { id: v.id, primary: v.primary }
			if(v.primary) primaryVariant = v;
		}
	})
	return {variantMap, availableColors, primaryVariant};
}

export const loader: LoaderFunction = async ({ params, request }) => {
	const product = await getSingleProduct(params.id);
	const productsToUpsell = await getAllProducts(); // TODO: create new func that searches for certain tags
		if (!product) {
		throw new Response("Not found", {
			status: 404,
		});
	}
	const url = new URL(request.url);
	const variantFromURL = url.searchParams.get('variant');

	const {variantMap, availableColors, primaryVariant} = mapVariants(product);
	console.log(variantMap)
	
	let initialVariant;
	if (variantFromURL && variantMap[variantFromURL]) {
		initialVariant = variantMap[variantFromURL]
	} else {
		initialVariant = primaryVariant;
	}

	return {product, products: productsToUpsell, variantMap, availableColors, initialVariant}

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

		<ProductRow products={products} label="SUMMER VIBES" linkText="SHOW MORE" linkTo="/products" max={4}/>
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