import React, {useState} from 'react'
import { PropTypes } from 'prop-types';

export default function Textform(props) {
    const handleUpperClick = () => {
        // console.log("UPPERCASE was clicked" + text);
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLowerClick = () => {
        // console.log("lowercase was clicked" + text)
        let lowerText = text.toLowerCase()
        setText(lowerText)
    }

    const handleFirstLetterClick = () => {
        let splitText = text.split(" ")
        let firstLetterText = splitText.toUpperCase()
        setText(firstLetterText)
    }

    const handleClearClick = () => {
        let cleartext = "";
        setText(cleartext)
    }

    const handleOnChange = (event) => {
        console.log("on change")
        setText(event.target.value)
    }

    const [text, setText] = useState('')
  return (
    <>
    <div className='mt-4'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <div className="button-container">
        <button className="btn btn-primary mx-2" onClick={handleUpperClick}>Convert to Uppercase</button>
        <button className="btn btn-secondary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className="btn btn-warning mx-2" onClick={handleFirstLetterClick}>Convert first letter to uppercase</button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear text</button>
        </div>
    </div>
    <div className="container my-4">
        <div className="row">
            <div className="col-6">
                <h2>Text summary</h2>
                <p>{text.replace(/\n/g,"").split(" ").filter(value => value !== "").length} counts and {text.trim().length} characters</p>
            </div>
        {/* </div>
        <div className="container my-3"> */}
            <div className="col-6">
                <h2>Text preview</h2>
                <p>{text}</p>
            </div>
        </div>
    </div>
    </>
  )
}

Textform.propTypes = {
    heading: PropTypes.string.isRequired,
    textheading: PropTypes.string.isRequired
}

Textform.defaultProps = {
    heading: "Enter heading here",
    textheading: "Text Box Heading"
}