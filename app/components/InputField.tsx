import { Dispatch, SetStateAction, useState } from "react"

export interface Props {
	placeholder: string, 
	label: string,
	value?: string,
	setter?: Dispatch<SetStateAction<string>>,
	height?: string,
	id: string,
}

export default function InputField(props: Props) {
	const [value, setValue] = useState('');
	const handleChange = (e:any) => {
		e.preventDefault();
		if (typeof props.setter === "function") {
			props.setter(e.target.value)
		} else {
			setValue(e.target.value)
		}
	}

	return (
		<div>
			<label className="text-pre font-bold" htmlFor={props.label}>{props.label}</label>
			{props.height ? (<textarea
				className='text-pre w-full text-primary bg-transparent border-2 rounded-md pl-4 pr-4 pt-2 pb-2 h-[250px]'
				id={props.id}
				name={props.id}
				value={props.value || value}
				placeholder={props.placeholder}
				onChange={handleChange}
			/>) : 
			(<input 
				className="text-pre w-full text-primary bg-transparent border-2 rounded-md pl-4 pr-4 pt-2 pb-2"
				type='text'
				id={props.id}
				name={props.id}
				value={props.value || value}
				placeholder={props.placeholder}
				onChange={handleChange}
			/>)}
		</div>
	)
}