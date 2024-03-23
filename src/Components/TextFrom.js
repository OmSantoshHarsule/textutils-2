import React, {useState} from 'react'

export default function TextFrom(props) {
  const handleUpClick = ()=>{
    //console.log("UpperCase was clicked"+ text);
    let newText =text.toUpperCase()
    setText( newText)
    props.showAlert("Converted to Uppercase","success")
    document.title = 'TextUtils-Uppercase'
  }
  const handleLoClick = ()=>{
    //console.log("UpperCase was clicked"+ text);
    let newText =text.toLowerCase()
    setText( newText)
    props.showAlert("Converted to Lowercase","success")
  }
  const handleclearClick = ()=>{
    //console.log("UpperCase was clicked"+ text);
    let newText =("")
    setText(newText)
    props.showAlert("Text Cleared","success")

  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied Text to Clipboard!","success")

  } 
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed Extra Spaces","success")

  }
  const handleOnChange = (event)=>{
    //console.log("On change")
    setText(event.target.value)
  }
  const [text, setText] = useState("")
  //text='new text '; //wrong way to  chnage the state
 //setText("new text"; //correct way to  chnage the state

  return (
    <>
  <div className="container1" style={{color:props.mode==='dark'?'white':'#042743'}}>
       <h1> {props.heading} </h1>
       <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor :props.mode==='dark'?'white':'white',color:props.mode==='dark'?'black':'black' }} id="myBox" rows="8"></textarea>
       </div>
       <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
       <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to LowerCase</button>
       <button className='btn btn-primary mx-2' onClick={handleclearClick}>Clear</button>
       <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy</button>
       <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}> Remove Extra Space</button> 
   </div>
   <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p> {text.split(" ").length} words and {text.length} characters</p>
    <p> {0.008* text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <h6><p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p></h6>
   </div>
   </>
  )
}