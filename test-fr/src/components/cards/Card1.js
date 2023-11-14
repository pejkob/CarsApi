import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Card1(props) {
  const circleClass = props.color === "Mauv" ? "circle-mau" : "circle";
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleEdit = () => {
    const url = `https://localhost:7049/cars/${props.id}`;

    const nameField = document.getElementById("Name").value;
    const descriptionField = document.getElementById("Type").value;
    const colorField = document.getElementById("Color").value;

    
      fetch(url, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nameField,
          description: descriptionField,
          color: colorField
        })
      }).then(() => {
          window.location.reload()
        })
        
    };

  const handleDelete = () => {
    const url = `https://localhost:7049/cars/${props.id}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Network response was not ok');
        }
        return resp.json();
      })
      .then((res) => {
        if (res.isSuccess) {
          setDeleteSuccess(true);
          window.location.reload();
        }
      })
      .catch(error => {
        setError('Error deleting data. Please try again.');
        console.error('There was an error!', error);
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
        <button onClick={handleDelete} className="btn btn-danger">
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

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}
