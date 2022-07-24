import React ,{useState} from 'react'
export default function Home() {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"+text);
    let newText = text.toUpperCase();
    // setText("You have clicked on handleUpClick");
    setText(newText);
  }
  const handleLowClick = () => {
    // console.log("Uppercase was clicked"+text);
    let newText = text.toLowerCase();
    // setText("You have clicked on handleUpClick");
    setText(newText);
  }
  const handleClearClick = () => {
    // console.log("Uppercase was clicked"+text);
    let newText = "";
    // setText("You have clicked on handleUpClick");
    setText(newText);
  }
  const handleOnChange = (event) => {
    console.log("HandleOnChange was clicked");
    setText(event.target.value);
  }
  const [text,setText]=useState('');
  
  return (
    <>
    <div className="container">
      <h1>Enter your text here to analyze</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
</div>
<div className="container">
<h1>Your Text summmary</h1>
<p>{text.split(" ").length} words, {text.length} charcters</p>
<p>{0.08*text.split(" ").length} Minutes to read</p>
<h2>Preview</h2>
<p>{text}</p>
</div>
</>
  )
}
