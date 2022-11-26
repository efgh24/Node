//ListMaker.js

import React from "react";
import uniqid from "uniqid"; 

function ListMaker(props) {   
    return props.items.map(item => {     
        return <li key={uniqid()}>{item}</li>;   
    }); 
}
export default ListMaker;
