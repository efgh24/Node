// Import React, ReactDOM, and unique:
import React from "react";
import ReactDOM from "react-dom";
import uniqid from "uniqid";

// Use the bestColors array to create a list of React elements:
function BestColor(props) {
	const bestColorsDup = props.myBestColors;
	// Use uniqid to generate each item’s key attribute value:
	const bestColorsElements = bestColorsDup.map(color =>
		<li key={uniqid()} className="template-list">{color}</li>
	);
	return <ul>{bestColorsElements}</ul>;
}
// Define the bestColors array:
const bestColors = ["Blue", "White", "Peru"];

// Render the BestColor component to the root DOM:
ReactDOM.render(
	<BestColor myBestColors={bestColors} />,
	document.getElementById("root")
);
