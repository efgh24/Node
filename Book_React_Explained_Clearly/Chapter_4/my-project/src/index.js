// index.js

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

// Example 1
function MyBio (props) {
	return <h1> My name is E! </h1>;
}

ReactDOM.render(<MyBio />, document.getElementById("root"));

//Example 2

function MyBio2(props) {
	return React.createElement("h1", null, "My name is E!");
}

ReactDOM.render(React.createElement(MyBio2), document.getElementById("root"));

