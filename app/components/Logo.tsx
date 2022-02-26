import { Link } from "remix";

export default function Logo() {
	return (
	<div className="w-full m-auto">
		<Link to="/">
			<img src="/LOGO.svg" alt='logo'/>
		</Link>
	</div>
	)
}