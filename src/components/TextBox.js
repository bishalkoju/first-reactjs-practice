import React ,{useState} from 'react'

export default function TextBox(props) {
    const handleupclick = () => {
            console.log("upper case was clicked" + text);
            let newText = text.toUpperCase();
            setText(newText);
    }
    const handleonchange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }
    const [text,setText] = useState("added texted")
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary" onClick={handleupclick}>Convert in upercase</button>
        </div>
    </div>
  )
}
