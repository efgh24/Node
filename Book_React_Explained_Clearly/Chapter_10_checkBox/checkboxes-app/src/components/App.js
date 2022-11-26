// App.js

import React from "react";
import Checkbox from "./Checkbox";

function App() {
    return (
        // <div className="techSubjectsQuestionnaire">
        //     <p><strong>What tech subjects are you learning?</strong></p>
        //     <Checkbox id="javascript" text="JavaScript" />
        //     <Checkbox id='css' text="CSS" />
        //     <Checkbox id='html' text="HTML" />
        //     <Checkbox id='react' text="ReactJS" />
        // </div>
        <div className="checked">
            <p><strong>What is the worst check?</strong></p>
            <Checkbox id="phone" text="Phone" />
            <Checkbox id='homie' text="Homie" />
            <Checkbox id='chin' text="Chin" />
            <Checkbox id='mate' text="Mate" />
        </div>
    );
}

export default App;
