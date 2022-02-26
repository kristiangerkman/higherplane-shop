
import { Links, LoaderFunction, Meta, Scripts, useLoaderData } from "remix";
import { useState } from 'react'
import type { Image } from '~/loaders/images'
import { ArrowRight, ArrowLeft } from "./Icons";

export interface Props {
	images: Image[];
}

export default function ScrollingImages (props: Props) {
	const [selectedImage, setSelectedImage] = useState(0);
	const [nextImage, setNextImage] = useState(1);
	const images = props.images;

	const setCurrentImage = (i: number) => {
		setSelectedImage(i);
	}


	// TODO: Figure out how to make this transition nicely to the next picture, also make scrollable somehow... rally weird shit
	const changePicture = (dir: number) => {
		if (selectedImage === 0 && dir === -1) {
			setSelectedImage(images.length-1);
			setNextImage(0);
			return;
		}

		if (selectedImage === images.length-1 && dir === 1) {
			setSelectedImage(0);
			setNextImage(1);
			return;
		}
		setSelectedImage(selectedImage +(dir))
		if (selectedImage === images.length-2 && dir === 1) {
			setNextImage((selectedImage +(dir)));
		} else {
			setNextImage((selectedImage +(dir)) + 1);
		}
	}

		const imageElems = images.map((img, i) => {
			return (
				<div key={i} className='h-48 w-full absolute z-[-1]' style={{backgroundImage: `url('${img}')`, backgroundSize: '100%', backgroundPositionY: '-40px' }} />
			)
		});

	return (
		<div className='relative h-48 w-full overflow-hidden rounded-md bg-no-repeat flex justify-center items-end flex-col z-0' >
			

				<div className="h-48 w-full absolute z-[-1]">
					{imageElems[selectedImage]}
				</div>
				<div className="h-48 w-full absolute z-[-1] bottom-[-110%]">
					{imageElems[nextImage]}
				</div>
			<div className='w-full flex justify-between flex-row mb-[4rem]'>
				<div className="w-[20px] h-[20px] ml-2.5" onClick={() => changePicture(-1)}>
					<ArrowLeft />
				</div>
				<div className="w-[20px] h-[20px] mr-2.5" onClick={() => changePicture(1)}>
					<ArrowRight />
				</div>
			</div>

			<div className="flex flex-row h-min w-full justify-center mb-[-4rem]">
				{ images.map((img, i) => {
					return (
						<div key={i} className={`w-[8px] h-[8px] mr-1 rounded-xl border-[1px] border-accent2 ${i === selectedImage ? 'bg-accent2' : 'bg-primary'}`} onClick={() => setCurrentImage(i)}/>
						)
				})}
			</div>
		</div>
	)
}

export function ErrorBoundary({ error }:any) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
        <Scripts />
      </body>
    </html>
  );
}