export default function Card1(props) {
    // Define a class based on props.color
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
      </div>
    );
}