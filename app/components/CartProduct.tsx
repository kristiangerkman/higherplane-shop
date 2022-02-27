import { Link, Links, Meta, Scripts } from "remix"
import { ItemFromCart } from "~/actions/carts"
import Dropdown from "./Dropdown"
import { Cross } from "./Icons"

export interface Props {
	item: ItemFromCart,
  currency: string,
}


 const CartItem = (props: Props) => {
	const { item, currency } = props
	return (
		<div className="w-[100%] flex flex-row">
			<Link to={`/products/${item.product_id}`}>
			<div className="w-[7.375rem] h-[7.375rem] overflow-hidden rounded-md bg-slate-500">
				<img src={item?.media[0]}></img>
			</div>
			</Link>
      <div className="border-solid border-2 border-primary rounded-md ml-2 p-3 w-[100%] flex justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col align-start justify-start">
			      <p className="text-pre font-semiBold mb-1 text-left" >{item.name}</p>
			      <p className="text-pre font-semiBold mb-1 text-left" >SIZE: MEDIUM</p>
			      <p className="text-pre font-semiBold mb-1 text-left" >COLOR: WHITE</p>
          </div>
          <div>
			      <p className="text-pre font-semiBold mb-1 text-left" >{item.quantity} x {item.list_price} {currency}</p>
          </div>
        </div>
        <div className="w-[50%] flex flex-col justify-between">
          <div className="w-[100%] flex justify-end">
            <div className="w-5">
              <Cross color={"fill-warn"} />
              { /**TODO on tap confirm and delete item */}
            </div>
          </div>
          <div className=" flex items-end">
            <Dropdown title="Quantity" initialValue={{label: "1", value: "1"}} values={[{ label: "1", value: "1"}, { label: "2", value: "1"}, { label: "3", value: "1"}]} setter={() => console.log("set new quantity")} />
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

export default CartItem;