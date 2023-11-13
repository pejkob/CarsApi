import "bootstrap/dist/css/bootstrap.css"

export default function Header()
{
    return(
        <div>
            <form >
                <h1>Edit form</h1>
                <div className="form">
                <label className="form-text" for="name">Car name: </label>
                <input className="form-control" type="text" id="Name"/>
                <br></br>
                <label className="form-text" for="name">Car type:</label>
                <input className="form-control" type="text" id="Type"/>
                <br></br>
                <label className="form-text" for="name">Car color: </label>
                <input className="form-control" type="text" id="Color"/>
                </div>
            </form>
        </div>
    )
}

