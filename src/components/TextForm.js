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
    const handleCopyText = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState('');

    // setText("New Text"); Correct way to change the state

    return (
        <>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} id="myBox" rows="7" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={handleLowClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-2" onClick={handleCopyText}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div >


            <div className='container my-2' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Your Text Summary</h3>
                <p> {text.split(" ").length} words and {text.length} characters</p>
                <p>{0.08 * text.split(" ").length} read time</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something above in textbox to preview here"}</p>
            </div>
        </>
    )
}
