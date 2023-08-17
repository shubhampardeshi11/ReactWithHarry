import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    const handleClearClick = () => {
        console.log("Text Cleared");
        let newText = ''
        setText(newText);
    }

    const [text, setText] = useState('');

    // setText("New Text"); Correct way to change the state

    return (
        <>
            <div className='container my-3'>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} id="textBox" rows="7" onChange={handleOnChange}></textarea>
                <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert To Lowercase</button>
                <button className="btn btn-primary my-2" onClick={handleClearClick}>Clear Text</button>
            </div>


            <div className='container my-2'>
                <h3>Your Text Summary</h3>
                <p> {text.split(" ").length} words and {text.length} characters</p>
                <p>{0.08 * text.split(" ").length} read time</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
