import React from "react";
import stories from "./madlibStories";

/*
* React component to create a madlib that will be displayed on the screen
* props are passed in from parent component MadlibContainer 
*/

function Madlib({ noun, noun2, adjective, color, story }) {
    let madlib = stories[story]
    madlib = madlib.replace('noun', noun).replace('noun2', noun2).replace('adjective', adjective).replace('color', color);
    return (
        <p>{madlib}</p>
    )
}

export default Madlib;
