import SpacedHeader from "~/components/SpacedHeader";
import Logo from "~/components/Logo";

export const loader = () => {
return {}
};

export default function Error() {
	return (
		<div className="pl-3 pr-3">
			<div className='h-[145px] w-full flex z-10 justify-center align-middle'>
				<div className='w-7/12 max-w-[18rem] min-w-[12rem] flex'>
					<Logo />
				</div>
			</div>
			<SpacedHeader text="ERROR :/"/>
			<section className="mb-5 ">
				<p className="text-body font-body" >Try reloading the page, if this error page still visible after few minutes, please contact us at contact@higherplane.clothing</p>
			</section>
		</div>
	);
}