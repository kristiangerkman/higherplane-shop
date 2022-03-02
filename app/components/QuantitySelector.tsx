import { useState, useEffect } from 'react';
import { Meta, Links, Scripts } from 'remix';
import { ArrowLeft, ArrowRight } from './Icons';

export interface Props {
	title?: string;
	setter: any;
	initialValue: number;
}

// TODO: onChange function
// TODO: make dropped values absolute instead of block, so that once the dd is open it doens't displace elems

const QuantitySelector = (props: Props) => {
	const { title, setter, initialValue } = props;
	const [value, setValue] = useState(initialValue);
	
	const handleValueChange = (e:any) => {

	}

	return (
		<div className='w-40'>
			{title && (<label className="text-pre font-bold">{title}</label>)}
			<div
			className="text-pre w-full text-primary h-[35px] bg-transparent border-2 rounded-md flex flex-col justify-center"
			>
				<div className=''>
						<div className='flex flew-col w-full justify-between align-middle'>
							<div className="border-r border-gray-800 text-center w-[35px]">
									<p className='text-notsure font-bold'>-</p>
							</div>
							<div>
								<p className="text-notsure">
								{value}
								</p>
							</div>
							<div className="border-l border-gray-800 text-center w-[35px]">
									<p className='text-notsure font-bold'>+</p>
							</div>
						</div>
					</div>
			</div>
		</div>
		);
	};
	
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
		
		export default QuantitySelector;
		