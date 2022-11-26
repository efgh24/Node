// Checkbox.js

import React from "react";

function Checkbox(props) {
	return (
		<div className="checkbox">
            <input type="checkbox" id={props.id} />
            <label htmlFor={props.id}>{props.text}</label>
		</div>
	);
}
export default Checkbox;
