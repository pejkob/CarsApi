import React, { useState } from "react";

export default function Card1(props) {
  const circleClass = props.color === "Mauv" ? "circle-mau" : "circle";
  const [deleteSuccess, setDeleteSuccess] = useState(false); // State to track delete success

  const handleDelete = () => {
    console.log("Delete button clicked for ID:", props.id);
    const url = "https://localhost:7049/cars/";

    fetch(url + props.id, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((res) => {
        if (res.isSuccess) {
          setDeleteSuccess(true); // Set delete success state to true
        }
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
        <a onClick={() => {}} className="btn btn-warning" role="button">
          Edit
        </a>
      </div>
      
      {/* Conditionally render the alert div */}
      {deleteSuccess && (
        <div className="alert alert-success" role="alert">
          Element removed
        </div>
      )}
    </div>
  );
}
