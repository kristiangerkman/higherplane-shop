import SpacedHeader from "~/components/SpacedHeader";
import CartItem from "~/components/CartProduct";
import { Form, useLoaderData } from "remix";
import { ItemFromCart } from "~/actions/carts";
import React from "react";
import Button from "~/components/Button";
import ProductRow from "~/components/ProductRow";
import { getAllProducts } from "~/loaders/products";

export const loader = async () => {
  console.log('Load cart with all of it\'s products')
  const products = await getAllProducts();

  // get cart
  // const products  = cart.items
  const cart = {
    id: "d9b25ffd-f1a8-4a7d-b3f2-d1353c7e4a2a",
    created_at: "2022-01-21T19:21:23.342Z",
    updated_at: "2022-01-21T19:21:23.343Z",
    email: null,
    currency: "EUR",
    items: [
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
        custom_fields: [],
        list_price: 14.95,
        discount_amount: null,
        tax_amount: null,
        quantity: 1
      }
    ],
    list_total: 14.95,
    discount_total: 0,
    tax_total: 0,
    cart_total: 14.95
  }
  return { items: cart.items, currency: cart.currency, products };
};

export default function Cart() {
  const { items, currency, products } = useLoaderData()
  return (
    <div className="pl-3 pr-3 mb-4">
      <SpacedHeader text="SHOPPING CART" />
      {items.length > 0 ?
        (
          <>
            <div >
              {
                items.map((p: ItemFromCart) => {
                  return (
                    <React.Fragment key={p.variant_id}>
                      <CartItem item={p} currency={currency} />
                    </React.Fragment>
                  );
                })
              }
            </div>
            <Form className="mb-10" action="/checkout">
              <Button text="PROCEED TO CHECKOUT" />
            </Form>

            <ProductRow products={products} label="RELATED ITEMS" linkText="SHOW MORE" linkTo="/products" max={4} />
          </>
        ) : (
          <div className="bg-slate-500 border-none rounded-md h-12 flex flex-col justify-center items-center">
            <p>Shopping cart is empty </p>
          </div>
        )

      }
    </div>
  );
}
