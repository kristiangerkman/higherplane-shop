import { Link, Links, Meta, Scripts } from "remix"
import { ItemFromCart } from "~/actions/carts"

export interface Props {
	item: ItemFromCart,
  currency: string,
}

 const CheckoutItem = (props: Props) => {
	const { item, currency } = props
	return (
    <div className="w-[100%] flex flex-row h-[4.7rem] mb-4">
      <div className="w-[100%] flex justify-start  border-solid border-2 border-primary rounded-md">
      <div className="w-[4.7rem] mr-1 flex flex-col justify-between">
        <div className="w-[4.7rem] h-[4.7rem] overflow-hidden rounded-md bg-slate-500">
          <img src={item?.media[0]}></img>
        </div>
      </div>
        <div className="flex flex-col justify-between p-3">
          <div className="flex flex-col align-start justify-start">
			      <p className="text-pre font-semiBold mb-1 text-left" >{item.name} / MEDIUM / WHITE</p>
          </div>
          <div>
            <p className="text-pre font-semiBold text-left align-text-bottom" >{item.quantity} x {item.list_price} {currency}</p>
          </div>
        </div>
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
      <body className="bg-red-500">
        {/* add the UI you want your users to see */}
        <Scripts />
      </body>
    </html>
  );
}

export default CheckoutItem;