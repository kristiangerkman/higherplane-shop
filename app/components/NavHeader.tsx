import { useEffect, useState } from 'react'
import Logo from './Logo'
// TODO: Add Licence to appropriate place https://fontawesome.com/license or install fontawesome
import { Bars, Cross } from './Icons'
import { Link } from 'remix';

export default function NavHeader() {
	const [open, setOpen] = useState(false);
	const setOpenState = () => {

		setOpen(!open);
		console.log(open)
	}
	const closeNav = () => {
		setOpen(false);
	}
	const listClasses = 'border-[1px] border-opacity-40 pt-2 pb-2 rounded-md'
	useEffect(() => {
		if (open) {
			document.querySelector('body')?.classList.add('overflow-y-hidden')
		} else {
			document.querySelector('body')?.classList.remove('overflow-y-hidden')
		}
	}, [open])
	return (
		<div className="z-10 w-full h-[145px] flex justify-center align-middle bg-transparent">
			<div className='h-[145px] w-full flex z-10 justify-center align-middle'>
				<div className='w-7/12 max-w-[18rem] min-w-[12rem] flex'>
					<Logo />
				</div>
				<div onClick={() => setOpenState()} className='w-[30px] right-[10%] top-[calc(145px/2-15px)] absolute' >
					{ !open ? <Bars /> : <Cross /> }
				</div>
			</div>
			{ open && (
				<div className={`
					w-full absolute opacity-[0.95] z-[9]
					${open ? 'h-[100vh] bg-hp' : "bg-transparent h-0" }
					flex justify-center pt-32
					`}> 
					<ul className="w-[80%] flex space-y-8 flex-col mt-3.5 mb-5 text-center text-spacedSmall font-semiBold">
						<li className='w-full' onClick={closeNav}>
							<Link to='about'>
								<div className={listClasses}> ABOUT </div>
							</Link>
						</li>
						<li className='w-full' onClick={closeNav}>
							<Link to='contact'>
								<div className={listClasses}> CONTACT </div>
							</Link>
						</li>
						<li className='w-full' onClick={closeNav}>
							<Link to='tracking'>
								<div className={listClasses}> ORDER TRACKING </div>
							</Link>
						</li>
						<li className='w-full' onClick={closeNav}>
							<Link to='legal#payment'>
								<div className={listClasses}> PAYMENT METHODS </div>
							</Link>
						</li>
						<li className='w-full' onClick={closeNav}>
							<Link to='legal'>
								<div className={listClasses}> LEGAL </div>
							</Link>
						</li>
						<li className='w-full' onClick={closeNav}>
							<Link to='legal#privacy'>
								<div className={listClasses}> PRIVACY POLICY </div>
								</Link>
						</li>
						<li className='w-full' onClick={closeNav}>
							<Link to='legal#shipment'>
								<div className={listClasses}> SHIPMENT POLICY </div>
							</Link>
						</li>
						<li className='w-full' onClick={closeNav}>
							<Link to='legal#tos'>
								<div className={listClasses}> TERMS OF SERVICE </div>
							</Link>
						</li>
					</ul>
				</div>
			) }
		</div>
	)
}