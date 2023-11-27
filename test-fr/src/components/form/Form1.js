import "bootstrap/dist/css/bootstrap.css"
import React,{useState} from "react"



export default function Form1()
{

  
const [form,formSwitch]=useState(false);
const handleNew=async()=>{
    const url="http://localhost:5167/cars/";
   await fetch(url,{
        method:"POST",
        headers:{
            "Content-type": "application/json"
        },
        body:JSON.stringify({
            name: document.getElementById("Name").value,
            description: document.getElementById("Type").value,
            color: document.getElementById("Color").value
        })
    }).then((resp) => resp.json())

    
}

return (
    <div>
      {form ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          { }
          <h1>New data</h1>
          <div className="form">
            <label className="form-text" htmlFor="name">
              Car name:
            </label>
            <input className="form-control" type="text" id="Name" />
            <br />
            <label className="form-text" htmlFor="name">
              Car type:
            </label>
            <input className="form-control" type="text" id="Type" />
            <br />
            <label className="form-text" htmlFor="name">
              Car color:
            </label>
            <input className="form-control" type="text" id="Color" />
          </div>
          <button onClick={handleNew} className="btn btn-primary">Send</button>
          <button onClick={()=>formSwitch(false)} className="btn btn-danger">X</button>
        </form>
      ) : (
        // Display the button to show the form
        <button
          className="btn btn-success"
          onClick={() => {
            formSwitch(true);
          }}
        >
          +
        </button>
      )}
    </div>
  );

}

