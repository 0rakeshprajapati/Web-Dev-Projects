import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("")


    const noOfWords=(array)=>{
        let newText=text.trim();
        if(newText.split(" ").length===1 && newText.split(" ")[0]===""){
            return [];
        }
        else if(newText.split(" ")[newText.split(" ").length-1]===" "){
            return newText.slice(0,newText.split(" ").length);
        }
        else{
            return newText.split(" ");
        }
    }

    const noOfChrac=(array)=>{
        let len=0;
        array.forEach(element => {
            if(element!==""){
                len+=element.length;
            }
        });
        return len;
    }

    const change=(event)=>{
        setText(event.target.value);
    }

    const toUpper=()=>{
        let upperText=text.toUpperCase();
        setText(upperText);
        props.showAlert("converted to upper case",'success');
    }
    const toLower=()=>{
        let upperText=text.toLowerCase();
        setText(upperText);
        props.showAlert("converted to lower case",'success');
    }

    const clear=()=>{
        setText("");
        props.showAlert("textarea cleared",'success');
    }

    const copy=()=>{
        console.log(text);
        navigator.clipboard.writeText(text);
        props.showAlert("copied to clipboard",'success');
    }

  return (
    <>
    <div className='container'>
        <h1 className={`text-${props.theme==='light'?'dark':'light'}`}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className={`form-control bg-${props.theme==='dark'?'light':'teriary'}`} id="textarea" rows="8" value={text} onChange={change} placeholder='hello type here...'></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={toUpper}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={toLower}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={clear}>Clear text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={copy}>Copy text</button>

    </div>
    <div className={`container text-${props.theme==='light'?'dark':'light'}`}>
        <h1>Your text summary</h1>
        <p>{(noOfWords(text)).length} words and {noOfChrac(noOfWords(text))} characters.</p>
        <p>{0.008*(noOfWords(text)).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
