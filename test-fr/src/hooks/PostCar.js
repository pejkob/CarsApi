import React from 'react'


function PostCar(props) {
    
    const checkInput=()=>
    {
        const name=document.getElementById("Name").value;
        const description=document.getElementById("Type").value;
        const color=document.getElementById("Color").value;
        if(name!==""&&description!==""&&color!==""){
            handleNew();
        }
        else{
            console.log("error");
        }
    }
     
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
        
        props.updateState();
        props.formSwitch(false);
    }
  return (
    <div>
        <button onClick={checkInput} className="btn btn-primary">Send</button>
    </div>
  )
}

export default PostCar