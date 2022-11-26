import React from "react";
import ReactDOM from "react-dom";

// const firstName = False;
// const myFirstName = <h1>My first name is E!</h1>;
// const mylastName = <h1>My last name is F.</h1>

// function DisplayMyName(props) {
//     if (firstName) {
//         return myFirstName;
//     } else {
//         return mylastName;
//     }
// }

// ReactDOM.render(<DisplayMyName />, document.getElementById("root"));

// JSX from JS 

function NameRequest(props) {
    return (
    <div className = "name-request-div">Enter your fulle name:
        <input id = "name-request-input" type = "text" placeholder = "Your last name first"/>
        </div>
        
    )
}

ReactDOM.render(<NameRequest />, document.getElementById("root"));

// function NameRequest(props) {
//     return React.createElement("div", {
//         className: "name-request-div"
//     }, "Enter your fulle name:",
//     React.createElement("input", {
//         id: "name-request-input",
//         type: "text",
//         placeholder: "Your last name first"
//     })
//     );
// }

// ReactDOM.render(
//     React.createElement(NameRequest),
//     document.getElementById("root")
// );