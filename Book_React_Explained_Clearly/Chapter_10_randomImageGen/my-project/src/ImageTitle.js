import React from 'react';

function ImageTitle(props) {
	return (
		<div className="image-title">
			<p>
				<strong>{props.imageData.title}</strong>
			</p>
		</div>
	);
}
export default ImageTitle;
