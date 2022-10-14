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

    const handleOnChange = (event) => {
        console.log("on change")
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here')
  return (
    <div className='mt-4'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">{props.textheading}</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <div className="button-container">
        <button className="btn btn-primary" onClick={handleUpperClick}>Convert to Uppercase</button>
        <buttnon className="btn btn-secondary m-2" onClick={handleLowerClick}>Convert to lowercase</buttnon>
        </div>
    </div>
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