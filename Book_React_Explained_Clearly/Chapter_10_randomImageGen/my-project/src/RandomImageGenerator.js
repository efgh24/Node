import React from 'react';

//Import Image, ImageTitle, and ImageDescription:
import Image from './Image';
import ImageTitle from './ImageTitle';
import ImageDescription from './ImageDescription';

function RandomImageGenerator(props) {
	return (
		<div className="imageInfo">
            {/** Invoke Image, ImageTitle, and ImageDescription: */}
            <Image imageData = {data} />
            <ImageTitle imageData={data} />
            <ImageDescription imageData={data} />
	</div>
	);
}
const data = {
	url: 'https://placeimg.com/400/400/any',
	title: 'Random Image',
	description: 'Get a new image each time you refresh your browser.'
};
export default RandomImageGenerator;

		{/* <div className="image">
			<img src={props.iamgeData.url} alt={props.imageData.title} />
		</div>
		<div className="image-title">
			<p>
				<strong>{props.imageData.title}</strong>
			</p>
		</div> */}
		{/* <div className="image-description">
			<p>{props.imageData.description}</p>
		</div> */}