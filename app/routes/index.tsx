import { Link, Links, Meta, Scripts, useLoaderData } from "remix";
import type { MetaFunction, LoaderFunction } from "remix";
import ScrollingImage from "~/components/ScrollingImage";
import { getImages } from "~/loaders/images";
import type { Image } from "~/loaders/images";
import SpacedHeader from "~/components/SpacedHeader";
import SmallProductPreview from "~/components/SmallProductPreview";
import Spacer from "~/components/Spacer";
import { getAllProducts, Product } from "~/loaders/products";
import ProductRow from "~/components/ProductRow";

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



export const meta: MetaFunction = () => {
  return {
    title: 'HIGHERPLANE SHOP',
  }
}

export const loader: LoaderFunction = async () => {
  const products = await getAllProducts();
  const images = getImages();
  return { products, images };
};

export default function Index() {
  const data = useLoaderData<{images: Image[], products: Product[]}>();
  return (
    <div className="flex flex-col">
      <ScrollingImage images={data.images}/>
      <SpacedHeader text="WELCOME"></SpacedHeader>
      <div className="pl-3 pr-3">
        <ProductRow products={data.products} label="MOST RECENT DROP" linkText="SHOW MORE" linkTo="/products?category=recent" max={4} />
        <ProductRow products={data.products} label="GOOD VIBES ONLY" linkText="SHOW MORE" linkTo="/products?category=recent" max={4} />
      <ToastContainer />
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