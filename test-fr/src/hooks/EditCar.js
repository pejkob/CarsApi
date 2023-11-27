import React from 'react'

function EditCar(props) {
    
    const handleEditCall=async ()=>{
        const url = `http://localhost:5167/cars/${props.id}`;
    
        const nameField = document.getElementById("Name").value;
        const descriptionField = document.getElementById("Type").value;
        const colorField = document.getElementById("Color").value;
    
       await fetch(url, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: nameField,
              description: descriptionField,
              color: colorField
            })
          })
          props.setIsEditing(!props.isEditing)
          props.updateState();
          

      }
  return (
    <div>
        <button onClick={handleEditCall} className="btn btn-primary">
            Save
          </button>
    </div>
  )
}

export default EditCar