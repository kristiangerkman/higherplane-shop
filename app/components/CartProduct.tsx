import { Link, Links, Meta, Scripts } from "remix"
import { ItemFromCart } from "~/actions/carts"
import Dropdown from "./Dropdown"
import QuantitySelector from "./QuantitySelector"
import { Cross } from "./Icons"

export interface Props {
	item: ItemFromCart,
  currency: string,
}


 const CartItem = (props: Props) => {
	const { item, currency } = props
	return (
		<div className="w-[100%] flex flex-row h-[9.3rem] mb-4">
			<div className="w-[6.3rem] mr-2">
        <Link to={`/products/${item.product_id}`}>
        <div className="w-[6.3rem] h-[6.3rem] overflow-hidden rounded-md bg-slate-500 mb-2">
          <img src={item?.media[0]}></img>
        </div>
        </Link>
        <div className=" flex items-end">
          <QuantitySelector initialValue={4} setter={() => console.log("set new quantity")} />
          { /**TODO on quantity change change quantity handler */}
        </div>
      </div>
      <div className="p-3 w-[100%] flex justify-between  border-solid border-2 border-primary rounded-md">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col align-start justify-start">
			      <p className="text-pre font-semiBold mb-1 text-left" >{item.name}</p>
			      <p className="text-pre font-semiBold mb-1 text-left" >SIZE: MEDIUM</p>
			      <p className="text-pre font-semiBold mb-1 text-left" >COLOR: WHITE</p>
          </div>
          {item.quantity > 1 &&
          (<div>
			      <p className="text-pre font-semiBold text-left align-text-bottom" >{item.quantity} x {item.list_price} {currency}</p>
          </div>)
          }
        </div>
        <div className="w-[50%] flex flex-col justify-between">
          <div className="w-[100%] flex justify-end">
            <div className="w-5">
              <Cross color={"fill-warn"} />
              { /**TODO on tap confirm and delete item */}
            </div>
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