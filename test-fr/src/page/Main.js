import CarsData from "../hooks/CarsData";
import "bootstrap/dist/css/bootstrap.css"
import Form1 from "../components/form/Form1";
 function Main()
{
    return( 
        <div className="row">
            <div className="col-md-9">
            <CarsData/>
            </div>
            <div className="col-md-3">
                <Form1/>
            </div>
        </div>
        )}
        
export default Main;
