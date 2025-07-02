import React,{useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = ()=> {
    //   console.log("Upper Case was clicked" + text);
      let newText= text.toUpperCase();
      setText(newText)
    }

    const handleOnChange = (event)=> {
    //   console.log("On Change")
      setText(event.target.value)
    }

      const [text, setText] = useState("Enter the text here :  ");

  return (
    <div>
            <h3>{props.heading}</h3> 
   
            <div className="mb-3 ">
             <textarea className="form-control" value={text}  onChange={handleOnChange}id="myBox" rows="8"></textarea>
            </div>
           <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
