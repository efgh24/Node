// App.js

import React from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = {isLoggedIn: false};
        this.changeState = this.changeState.bind(this);
    }
    changeState() {
        this.setState({isLoggedIn: !this.state.isLoggedIn});
    }
    render() {
        const buttonText = this.state.isLoggedIn ? "Log out" : "Log in";
        const displayText = buttonText === "Log in" ? "out" : "in";
        return (
            <div>
                <h1>You are logged {displayText}</h1>
                <button onClick={this.changeState}>{buttonText}</button>
            </div>
        );
    }
}

export default App;