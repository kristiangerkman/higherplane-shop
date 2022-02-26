export interface Props {
	text: string,
}

export default function Button(props: Props) {
	return (
		<div className="mt-2 mb-2">
			<input className="font-bold text-pre w-full text-cta bg-transparent border-cta border-2 rounded-md pl-4 pr-4 pt-2 pb-2" type='submit' value={props.text} />
		</div>
	)
}