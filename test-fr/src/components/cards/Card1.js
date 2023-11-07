"./Card1.css"

export default function Card1(props)
{
    return (
        <div key={props.key} className="card">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{props.color}</li>
            </ul>
        </div>)

}