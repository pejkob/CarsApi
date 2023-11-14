import React, {useState} from "react";

export default function Modal(){

    return(
        
    <div className="modal">
        <div className="modaldiv">
            <div className="modal-content">
      ...
            </div>
        </div>
        <button className="btn btn-danger">Cancel</button>
        <button className="btn btn-primary">Save Changes</button>

    </div>
    )
}