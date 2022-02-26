export interface Props {
	text: string
};

export default function SpacedHeader( props: Props ) {
	return (
		<div className="flex justify-center mt-5 mb-5 w-full">
			<h1 className="text-spaced font-bold text-center">{props.text}</h1>
		</div>
	)
}