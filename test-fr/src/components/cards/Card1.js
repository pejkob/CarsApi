import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import EditForm from '../form/EditForm';
import DeleteCar from '../../hooks/DeleteCar';
import EditCar from '../../hooks/EditCar';

export default function Card1(props) {
  const circleClass = props.color === 'Mauv' ? 'circle-mau' : 'circle';
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [color, setColor] = useState(props.color);

  return (
    <div key={props.key} className="card">
      <div className="card-body">
       
        {!isEditing ? (
          <>
            <h5 className="card-title">{name}</h5>
           
            <p className="card-text">{description}</p>
          </>
        ) : (
          <>
           <EditForm color={color} description={description} name={name} setColor={setColor} setDescription={setDescription} setName={setName}/>
          </>
        )}
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.color}</li>
        <div
              className={circleClass}
              style={{
                backgroundColor: props.color === 'Mauv' ? 'rgb(224, 176, 255)' : props.color,
              }}
            ></div>
      </ul>
      <div className="btn-group">
        {!isEditing ? (
         <DeleteCar id={props.id} setDeleteSuccess={setDeleteSuccess} updateState={props.updateState} setError={setError}/>
        ) : (
          <EditCar id={props.id} updateState={props.updateState} isEditing={isEditing} setIsEditing={setIsEditing}/>
        )}
        <button
          className={!isEditing ? 'btn btn-warning' : 'btn btn-secondary'}
          onClick={() => setIsEditing(!isEditing)}
        >
          {!isEditing ? 'Edit' : 'Cancel'}
        </button>
      </div>

      {deleteSuccess && (
        <div className="alert alert-success mt-2" role="alert">
          Element updated successfully
        </div>
      )}

      {error && (
        <div className="alert alert-danger mt-2" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}
