import { Meta, Links, Scripts } from "remix";
import { Product } from "~/loaders/products";
import SmallProductPreview from "./SmallProductPreview";
import Spacer from "./Spacer";

export interface Props {
	products: Product[];
	label?: string;
	linkTo?: string; // TODO: Make ENUM of all possible routes and use that
	linkText?: string;
	max?: number;
}

export default function ProductRow(props: Props) {
	const { products, label, linkTo, linkText, max } = props;
	let productsToRender = [...products];
	if (max) productsToRender.splice(max, productsToRender.length-max)

	return (
		<div className="pr-3 pl-3 flex flex-col">
			{label && <h1 className="text-small font-bold mb-2">{label}</h1>}
			<div className="flex flex-row justify-between flex-wrap">
				{
					productsToRender.map((p, i) => {
						return <SmallProductPreview key={i} product={p}/>
					})
				}
			</div>
			<div>
				{linkTo && linkText && <Spacer text={linkText} to={linkTo} />}
			</div>
		</div>
	)
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