import React from 'react';

function Image(props) {
	return (
		<div className="image">
			<img src={props.imageData.url} alt={props.imageData.title} />
		</div>
	);
}
export default Image;
