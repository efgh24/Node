//App.js

import React from "react";
import Checkbox from "./Checkbox";

function App() {
    return (
        <div className="techSubjectQuestionnaire">
            <p><strong>What tech subject are you learning?</strong></p>
            <div className="checkbox">
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">JavaScript</label>
            </div>
            <div className="checkbox">
                <input type="checkbox" id="html" />
                <label htmlFor="html">HTML</label>
            </div>
            <div className="checkbox">
                <input type="checkbox" id="react" />
                <label htmlFor="react">ReactJS</label>
            </div>
        </div>
    );
}

export default App;