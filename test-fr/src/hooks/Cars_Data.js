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
       
        <div>
         <Card1 id={item.id} name={item.name} color={item.color} description={item.description} />
        </div>
         
        )});
    return(
        <>
            {cards}
        </>
    )
}