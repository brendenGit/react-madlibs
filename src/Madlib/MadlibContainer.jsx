import { useState } from "react";
import { v4 as uuid } from "uuid";

import Madlib from "./Madlib";
import NewMadlibForm from "./NewMadlibForm";
import useDisplayToggle from "../hooks/useDisplayToggle";

/*
* MadlibContainer is our parent component that renders, depending on state either the madlib form or the madlib itself
* we leverage displayToggle to change the value of display (boolean) in state to indcate if an ele should be displayed
* @hook useDisplayToggle defaults to true, accepts a boolean value
*/

const MadlibContainer = () => {
    const [madlib, setMadlib] = useState({});
    const [isShowing, toggleDisplay] = useDisplayToggle(false);

    //updates our current madlib in state
    const addMadlib = ({ noun, noun2, adjective, color, story }) => {
        const newMadlib = { noun, noun2, adjective, color, story, id: uuid() }
        setMadlib(newMadlib);
        toggleDisplay();
    };

    const handleClick = () => {
        toggleDisplay(false);
    };

    return (
        <div className="MadlibContainer">
            <h1>Madlibs!</h1>
            {!isShowing ? (
                <NewMadlibForm addMadlib={addMadlib} />
            ) : (
                <>
                    <Madlib noun={madlib.noun} noun2={madlib.noun2} adjective={madlib.adjective} color={madlib.color} story={madlib.story} key={madlib.id} />
                    <button onClick={handleClick}>Restart</button>
                </>
            )}
        </div>
    )
};

export default MadlibContainer;