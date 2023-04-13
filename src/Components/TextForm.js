import React, { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] = useState("")
    const handleUpClick = () => {
        // console.log("uppercase was clicked!!"+text);
        let newText = text.toUpperCase();
        setText(newText)

        props.showAlert("Converted to Uppercase!!", "success");
    }
    const handleLowClick = () => {
        // console.log("uppercase was clicked!!"+text);
        let newText = text.toLowerCase();
        setText(newText)

        props.showAlert("Converted to Lowercase!!", "success");
    }
    const handleOnChange = (event) => {
        // console.log("change  was seen!!")
        setText(event.target.value)
    }
    const handleClearText = (event) => {
        // console.log("change  was seen!!")
        setText("")

        props.showAlert("Text has been cleared!!", "success")
    }
    const handleOnClick = ()=>
    {
        // console.log('text', text)
        // var textField = document.createElement('textarea')
        // textField.innerText = text
        // document.body.appendChild(textField)
        // textField.select()
        // document.execCommand('copy')
        // textField.remove()

        let text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value);

        props.showAlert("Text has been copied to clipboard.", "success")
    }
    const handleExtraSpaces = ()=>
    {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))

        props.showAlert("Extra spaces has been removed.", "success")
    }

    // setText("Bishal"); used to set text 
    return (
        <>
            <div className='container' style={{color : props.mode==='dark'?'white':'black'}} >
                <div className='my-3 container'>
                    <h1 className='container my-3'>Enter the Text to analyse below - </h1>
                    <div className="mb-3">
                        <textarea className="form-control my-3" style={{backgroundColor : props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}} placeholder='Enter your text here....' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    </div>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to lowercase</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleOnClick}>Copy to your Clipboard</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
                </div>
                <div className='my-3'style={{color : props.mode==='dark'?'white':'black'}}>
                    <h2>Your Text Summary</h2>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{text.split(" ").length * 0.008} Minutes to read</p>
                    <h3>Preview</h3>
                    <p>{text.length>0 ? text:'Enter any text above to preview it here.....'}</p>
                </div>
            </div>
        </>
    );
}
