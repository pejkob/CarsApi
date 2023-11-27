import React from "react"

export default function EditForm(props)
{
    return(
        <>
         <input
              type="text"
              value={props.name}
              onChange={(e) => props.setName(e.target.value)}
              className="form-control mb-2" id='Name'
            />
            <input
              type="text"
              value={props.description}
              onChange={(e) => props.setDescription(e.target.value)}
              className="form-control mb-2" id='Type'
            />
            <input
              type="text"
              value={props.color}
              onChange={(e) => props.setColor(e.target.value)}
              className="form-control mb-2" id='Color'
            />
        </>
    )
}