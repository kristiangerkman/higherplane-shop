import { useState } from "react";
import { Links, Meta, Scripts, useLoaderData } from "remix";
import Dropdown from "~/components/Dropdown";
import ProductRow from "~/components/ProductRow";
import SpacedHeader from "~/components/SpacedHeader";
import { getAllProducts, Product } from "~/loaders/products";

export const loader = async () => {
	return await getAllProducts();
};

export default function AllProducts() {
	const [tmp, setTmp] = useState("");
	// I guess this should happen inside loader and then use the filtered data in this function
	const products = useLoaderData<Product[]>();
	// check for params
	// filters

	return (
    <div>
		<SpacedHeader text="PRODUCTS"/>
		<Dropdown title="SIZE" setter={setTmp} initialValue={{ value: "L", label: 'L'}} values={[{ value: "L", label: 'L'}, { value: "M", label: 'M'}]} />
		<br />
		<Dropdown title="SIZE" setter={setTmp} initialValue={{ value: "L", label: 'L'}} values={[{ value: "L", label: 'L'}, { value: "M", label: 'M'}]} />
		<br />

		<ProductRow products={products}/>
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