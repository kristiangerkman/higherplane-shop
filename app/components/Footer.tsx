import { Link } from "remix"
import Logo from "./Logo"
import NewsletterForm from "./NewsletterForm"

export default function Footer() {
	return (
		<div className="bg-hg w-full flex flex-col pr-3 pl-3">
			<div className="flex w-full justify-center">

			<div className='w-7/12 max-w-[18rem] min-w-[12rem]'>
				<Logo />
			</div>
			</div>
			<br />
			<NewsletterForm msg={"SUBSCRIBE TO OUR NEWSLETTER AND GET 15% OFF YOUR ORDER"}/>

			<ul className="flex space-y-4 flex-col mt-3.5 mb-5">
				<li>
					<Link to='about'>ABOUT</Link>
				</li>
				<li>
					<Link to='contact'>CONTACT</Link>
				</li>
				<li>
					<Link to='tracking'>ORDER TRACKING</Link>
				</li>
				<li>
					<Link to='legal#payment'>PAYMENT METHODS</Link>
				</li>
				<li>
					<Link to='legal'>LEGAL</Link>
				</li>
				<li>
					<Link to='legal#privacy'>PRIVACY POLICY</Link>
				</li>
				<li>
					<Link to='legal#shipment'>SHIPMENT POLICY</Link>
				</li>
				<li>
					<Link to='legal#tos'>TERMS OF SERVICE</Link>
				</li>
			</ul>
			<p className='font-mono text-gray-800 text-pre text-center mb-2'> COPYRIGHT (C) HIGHERPLANE CLOTHING OY 2022</p>
		</div>
	)
}