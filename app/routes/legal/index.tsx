import SpacedHeader from "~/components/SpacedHeader";

export const loader = () => {
	return {}
};


// @TODO: Connect to CMS
export default function Legal() {
  return (
		<div className="pl-3 pr-3">
		<SpacedHeader text="LEGAL SHIT"/>
			<section id='payment' className="mb-5">
				<h2 className="text-title3 font-semiBold mb-2">Payment methods</h2>
				<p className="text-body font-body" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</section>
			<section id='privacy' className="mb-5">
				<h2 className="text-title3 font-semiBold mb-2">Privacy policy</h2>
				<p className="text-body font-body" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
			</section>
      <section id='shipment' className="mb-5 ">
				<h2 className="text-title3 font-semiBold mb-2">Shipment policy</h2>
				<p className="text-body font-body" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</section>
			<section id='tos' className="mb-5">
				<h2 className="text-title3 font-semiBold mb-2">Terms of service</h2>
				<p className="text-body font-body" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/><br/> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
			</section>
    </div>
  );
}