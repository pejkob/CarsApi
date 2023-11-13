import React, { useState } from "react";
import"bootstrap/dist/css/bootstrap.css"


export default function Card1(props) {
  const circleClass = props.color === "Mauv" ? "circle-mau" : "circle";
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const handleEdit = () => {
    const url = "https://localhost:7049/cars/";
  
    fetch(url + props.id, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: document.getElementById("Name").value,
        description: document.getElementById("Type").value,
        color: document.getElementById("Color").value
      })
    })
      .then((resp) => resp.json())
      .then((res) => {
        window.location.reload();
      });
  };
  

  const handleDelete = () => {
    const url = "https://localhost:7049/cars/";

    fetch(url + props.id, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((res) => {
        if (res.isSuccess) {
          setDeleteSuccess(true);
        }
        window.location.reload();
      });
  };

  return (
    <div key={props.key} className="card">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <div
          className={circleClass}
          style={{
            backgroundColor: props.color === "Mauv" ? "rgb(224, 176, 255)" : props.color,
          }}
        ></div>
        <p className="card-text">{props.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.color}</li>
      </ul>
      <div className="btn-group">
        <button onClick={handleDelete} className="btn btn-danger" role="button">
          Delete
        </button>
        <button className="btn btn-warning" onClick={handleEdit}>
          Edit
      </button>
      </div>
      
      {deleteSuccess && (
        <div className="alert alert-success" role="alert">
          Element removed
        </div>
      )}
    </div>
  );
}
