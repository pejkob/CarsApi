import React,{useState,useEffect} from "react";
import Card1 from "../components/cards/Card1";

export default function Cars_Data() {

    const [adat,setData]=useState([]);
    const url="https://localhost:7049/cars";

    useEffect(function (){
        fetch(url).then(response => response.json())
        .then(data => setData(data))
    }, [])
   
    const Carcards=adat.map(item=>
    {
        return(
            <>
            <Card1
             key={item.id}
             {...item}
             />
            </>
        )});

    return(
        <><div className="col-md-10">
            {Carcards}
        </div>
        </>
    )
}