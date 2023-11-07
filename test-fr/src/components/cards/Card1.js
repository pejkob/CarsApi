import React from "react";
import Cars_Delete from "../../hooks/Cars_Delete";

export default function Card1(props) {
  const circleClass = props.color === "Mauv" ? "circle-mau" : "circle";


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
        <button  className="btn btn-danger" role="button">
          Delete
        </button>
        <a onClick={() => {}} className="btn btn-warning" role="button">
          Edit
        </a>
      </div>
    </div>
  );
}
