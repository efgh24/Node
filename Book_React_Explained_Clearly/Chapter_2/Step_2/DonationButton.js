// DonationButton.js

class DonateButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {donated: false};
    }

    render() {
        if (this.state.donated) {
            return "Thank you so much for the support! It really makes a difference.";
        }
        return React.createElement(
            "button",
            { onClick: () => this.setState({donated: true}) },
            "☕ Buy me a coffee"
        );
    }
}

const domContainer = document.getElementById("donation-button");
ReactDOM.render(React.createElement(DonateButton), domContainer);

