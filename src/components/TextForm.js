import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter Text here");

    // setText("New Text"); Correct way to change the state

    return (
        <div>
            <div className="my-3">

                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} id="textBox" rows="7" onChange={handleOnChange}></textarea>
                <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert To Uppercase</button>
            </div>
        </div>
    )
}
