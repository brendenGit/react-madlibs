import React from "react";
import { useState } from "react";

import "./NewMadlibForm.css";

/*
* Form for user to input values for their madlib
* returns a form 
*/

const NewMadlibForm = ({ addMadlib }) => {
    //INITIAL_STATE to reset form values
    const INITIAL_STATE = {
        noun: "",
        noun2: "",
        adjective: "",
        color: "",
        story: "default"
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    // Form data change handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        addMadlib(formData);
        setFormData(INITIAL_STATE);
    };

    return (
        <form className={'NewMadlibForm'} onSubmit={handleSubmit}>
            <label htmlFor="noun">
                <input
                    required
                    placeholder="Noun"
                    type="text"
                    name="noun"
                    id="noun"
                    value={formData.noun}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="noun2">
                <input
                    required
                    placeholder="Noun 2"
                    type="text"
                    name="noun2"
                    id="noun2"
                    value={formData.noun2}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="adjective">
                <input
                    required
                    placeholder="Adjective"
                    type="text"
                    name="adjective"
                    id="adjective"
                    value={formData.adjective}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="color">
                <input
                    required
                    placeholder="Color"
                    type="text"
                    name="color"
                    id="color"
                    value={formData.color}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="select">
                <select required name="story" id="story" value={formData.story} onChange={handleChange}>
                    <option value="default" disabled>Select a story</option>
                    <option value={0}>Story 1</option>
                    <option value={1}>Story 2</option>
                    <option value={2}>Story 3</option>
                    <option value={3}>Story 4</option>
                </select>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default NewMadlibForm;