import { Link, Links, Meta, Scripts } from "remix"
import { Product } from "~/loaders/products"

export interface Props {
	product: Product;
}


export default function SmallProductPreview(props: Props) {
	const { product } = props
	return (
		<div className="w-[9.375rem] h-[11.875rem] block hover:underline">
			<Link to={`/products/${product.name.replaceAll(' ', '-').toLowerCase()}`}>
			<div className="w-[9.375rem] h-[9.375rem] overflow-hidden rounded-md bg-slate-500">
				<img src={product?.variants[0]?.media[0]}></img>
			</div>
			<p className="text-spacedSmall font-semiBold mt-1.5 text-center mb-1" >{product.name}</p>
			</Link>
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
      <body className="bg-red-500">
        {/* add the UI you want your users to see */}
        <Scripts />
      </body>
    </html>
  );
}