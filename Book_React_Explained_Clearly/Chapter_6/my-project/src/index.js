import React from "react";
import ReactDOM from "react-dom";

// function NameRequest(props) {
// 	return (
// 		<div className="name-request-div"> Enter your full name:
//       <input id="name-request-input" type="text" placeholder="Your last name first" /> </div>
// 	);
// }
//ReactDOM.render(<NameRequest />, document.getElementById("root"));


//The goal is to convert the function component above into its class equivalence. 


class NameRequest extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="name-request-div"> Enter your full name:
        <input id="name-request-input" type="text" placeholder="Your last name first" /> </div>
    );
  }
}

ReactDOM.render(<NameRequest />, document.getElementById('user-name'));

