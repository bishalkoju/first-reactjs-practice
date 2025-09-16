import React ,{useState} from 'react' // usestate is a hook

export default function TextBox(props) {
    const handleupclick = () => {
            console.log("upper case was clicked");
            let newText = text.toUpperCase();
            setText(newText);
    }// handleonchange function is used to change the text in the textbox
    const handleloclick = () => {
            console.log("lower case was clicked");
            let newText = text.toLowerCase();
            setText(newText);
    }
    const handleclearclick = () => {
            console.log("clear was clicked");
            let newText = " ";
            setText(newText);
    }
    const handlecapclick = () => {
            console.log("capitalize case was clicked");
            let newText = text.split(" ").map( text => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()).join(" ");
            setText(newText);
    }

    const handleonchange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }// usestate is used to change the text in the textbox
    const [text,setText] = useState("")// usestate is a hook
  return (
    <>
      < div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea className="form-control" style={{backgroundColor: props.mode==='dark'? 'gray' :'white', color: props.mode==='dark'?'white':'black'}}  value={text} onChange={handleonchange} id="myBox" rows="8"></textarea>
          <button className="btn btn-dark mx-2 " onClick={handleupclick}>Convert in upercase</button> 
          <button className="btn btn-dark mx-2 " onClick={handleloclick}>Convert in lowercase</button> 
          <button className="btn btn-dark mx-2 " onClick={handleclearclick}>Clear text</button>   
          <button className="btn btn-dark mx-2 " onClick={handlecapclick}>Capitalize</button>   
          </div>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p>{text.length} letters and {text.split(" ").length} words</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  )
}
