import React from 'react';

function ImageDescription(props) {
	return (
		<div className="image-description">
			<p>{props.imageData.description}</p>
		</div>
	);
}

export default ImageDescription;