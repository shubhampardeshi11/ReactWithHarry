import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to Uppercase", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to Lowercase", "success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleClearClick = () => {
        let newText = ''
        setText(newText);
        props.showAlert("Text is removed", "success");

    }
    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied text to clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces is removed!", "success");

    }

    const [text, setText] = useState('');

    // setText("New Text"); Correct way to change the state

    return (
        <>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='mb-2'>{props.heading}</h1>
                <textarea className="form-control" value={text} id="myBox" rows="7" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#7c86f1' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert To Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleLowClick}>Convert To Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleCopyText}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div >


            <div className='container my-2' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Your Text Summary</h3>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.08 * text.split(" ").filter((element) => { return element.length !== 0 }).length} read time</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
