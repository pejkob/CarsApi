import Card1 from "../components/cards/Card1"

export default function Main()
{
    return(
        <div>
            <Card1
            id={1}
            name={"audi"}
            description={"új"}
            color={"kék"}

            />
            <Card1
             id={2}
             name={"bmw"}
             description={"használt"}
             color={"fekete"}
 
            />
            <Card1
             id={3}
             name={"skoda"}
             description={"roncs"}
             color={"narancs"}
 
            />
         
        </div>
    )
}

