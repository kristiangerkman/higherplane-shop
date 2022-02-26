import { Link } from "remix";

export interface Props {
	text: string,
	to: string,
}


export default function Spacer(props: Props) {
	return (
		<div className="w-full flex flex-row justify-center items-center mt-3.5 mb-7">
			<div className='min-w-[7rem] w-[7rem] h-[1px] bg-primary'></div>
			<div className='underline ml-3 mr-3 text-button font-bold' ><Link to={props.to}>{props.text}</Link></div>
			<div className='min-w-[7rem] w-[7rem] h-[1px] bg-primary'></div>
		</div>
	)
}