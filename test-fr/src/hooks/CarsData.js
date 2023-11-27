import React,{useState,useEffect} from "react";
import Card1 from "../components/cards/Card1";
import Form1 from "../components/form/Form1";

export default function CarsData() {

    const [count,setCount]=useState(0)
    const handleCountState=()=>
    {
        setCount(count+1);
    }

    const [adat,setData]=useState([]);
    const url="http://localhost:5167/cars";

    useEffect(function (){
        fetch(url).then(response => response.json())
        .then(data => setData(data.result))
    }, [count])
   
    const cards=adat.map(item=>
    {
        return(
        <>
            
         <Card1 key={item.id} {...item} updateState={handleCountState}/>
         </>
        )});
        
    return(
        <>
        <div className="col-md-3">
            <Form1 updateState={handleCountState}/>
        </div>
            {cards}
        </>
    )
}