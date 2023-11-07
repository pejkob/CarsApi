import React,{useState,useEffect} from "react";
import Card1 from "../components/cards/Card1";

export default function Cars_Data() {

    const [adat,setData]=useState([]);
    const url="https://localhost:7049/cars";

    useEffect(function (){
        fetch(url).then(response => response.json())
        .then(data => setData(data))
    }, [])
   
    const cards=adat.map(item=>
    {
        return(
            <>
            <Card1
             key={item.id}
             name={item.name}
             description={item.description}
             color={item.color}
             />
            </>
        )});

    return(
        <>
            {cards}
            <button onClick={()=>{setData(adat+1)}}>Adat</button>
        </>
    )
}