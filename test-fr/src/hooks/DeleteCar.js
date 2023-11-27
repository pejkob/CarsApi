import React from 'react'

function DeleteCar(props) {

    const handleDelete =async () => {
        const url = `http://localhost:5167/cars/${props.id}`;
        await fetch(url, {
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
              props.setDeleteSuccess(true);
            }
          })
          .catch(error => {
            props.setError('Error deleting data. Please try again.');
            console.error('There was an error!', error);
          })
          props.updateState();
    
      };
  return (
    <div>
       <button onClick={handleDelete} className="btn btn-danger">
            Delete
          </button>
    </div>
  )
}

export default DeleteCar