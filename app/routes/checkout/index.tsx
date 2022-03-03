import SpacedHeader from "~/components/SpacedHeader";
import { Form, useLoaderData } from "remix";
import { ItemFromCart } from "~/actions/carts";
import React from "react";
import Button from "~/components/Button";
import CheckoutItem from "~/components/checkout/CheckoutItem";
import InputField from "~/components/InputField";
import Spacer from "~/components/Spacer";

export const loader = async () => {
	// get cart
	// const products  = cart.items
	const checkout = {
		id: "06459310-52a3-4ef2-a2d6-b1cd80cee434",
		created_at: "2022-03-03T07:18:05.480Z",
		updated_at: "2022-03-03T07:18:05.480Z",
		billing_address: null,
		coupon: null,
		cart: {
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
					custom_fields: [ ],
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
		},
		sub_total: 14.95,
		tax_total: 0,
		grand_total: 14.95
	}

	return { checkout, items: checkout.cart.items, currency: checkout.cart.currency };
};

	const couponFieldData:any = [{
			placeholder: "Type here...",
      label: "DISCOUNT COUPON",
      id: "coupon",
      height: false,
      required: true,
	}]
	
  const constactFieldData:any = [
    {
      placeholder: "Type here...",
      label: "FIRST NAME",
      id: "first-name",
      height: false,
      required: true,
    },
    {
      placeholder: "Type here...",
      label: "LAST NAME",
      id: "last-name",
      height: false,
      required: true,
    },
    {
      placeholder: "Type here...",
      label: "EMAIL",
      id: "e-mail",
      height: false,
      required: true,
    },
		{
      placeholder: "Type here...",
      label: "PHONE NUMBER",
      id: "phone",
      height: false,
      required: true,
    }
  ]

	  const deliveryFieldData:any = [
		{
      placeholder: "Type here...",
      label: "COUNTRY",
      id: "country",
      height: false,
      required: true,
    },
    {
      placeholder: "Type here...",
      label: "ADDRESS",
      id: "address",
      height: false,
      required: true,
    },
    {
      placeholder: "Type here...",
      label: "CITY",
      id: "city",
      height: false,
      required: true,
    },
		{
      placeholder: "Type here...",
      label: "ZIP CODE",
      id: "zip",
      height: false,
      required: true,
    }
  ]
  
  
  
  const fields = (fieldData:any) => {
    const fields = fieldData.map((f:any) => {
      return (<React.Fragment key={f.id}><div className="mb-4"><InputField placeholder={f.placeholder} label={f.label} id={f.id} height={f.height ? 't' : undefined} /></div></React.Fragment>)
    });
    return (<>{fields}</>)
  }

export default function Checkout() {
const { items, currency, checkout } = useLoaderData()
return (
	<div className="pl-3 pr-3 mb-4">
	<SpacedHeader text="CHECKOUT"/>
	{items.length > 0 ? 
	(
	<>
		<div>
		{items.map((p: ItemFromCart) => {
			return (
				<React.Fragment key={p.variant_id}>
					<CheckoutItem item={p} currency={currency} />
				</React.Fragment>
			);
		})}
		</div>
		<p className="text-small font-bold">TOTAL: {checkout.sub_total} {currency}</p>
		<Form className="mb-2 mt-1">
			{fields(couponFieldData)}
		</Form>
		<Spacer text="CONTACT INFO" />
		<Form className="mb-10">
			{fields(constactFieldData)}
		</Form>
		<Spacer text="DELIVERY INFO" />
		<Form className="mb-10">
			{fields(deliveryFieldData)}
		</Form>
		<Spacer text="PAYMENT " />
		<p> PAYPAL </p>
		<p> SEPA </p>
		<p> ONLINE BANK</p>
		<Button text="COMPLETE PURCHASE" />
	</>

	) : (
		<div className="bg-slate-500 border-none rounded-md h-12 flex flex-col justify-center items-center">
			<p>You don't have any products to checkout - Continue shopping </p>
		</div>
	)}
	</div>);
}
