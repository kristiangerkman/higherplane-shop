import { Link } from "remix";

export interface Props {
	text: string,
	to?: string,
}


export default function Spacer(props: Props) {
	return (
		<div className="w-full flex flex-row justify-center items-center mt-3.5 mb-4">
			<div className='min-w-[7rem] w-[7rem] h-[1px] bg-primary'></div>
			<div className={props.to ? 'underline ml-3 mr-3 text-button font-bold' : 'ml-3 mr-3 text-button font-bold'} >
				{props.to ? <Link to={props.to}>{props.text}</Link> : props.text}
			</div>
			<div className='min-w-[7rem] w-[7rem] h-[1px] bg-primary'></div>
		</div>
	)
}