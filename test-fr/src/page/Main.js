import Card1 from "../components/cards/Card1"
import Data from "../hooks/Data"

 function Main()
{
    const cards= Data.map(item=>
    {
        return(
            <>
            <Card1
             id={item.id}
             name={item.name}
            description={item.description}
            color={item.color}
             />
            </>
        )});

    return( 
        <div>
            {cards}
        </div>
        )}
        
export default Main;
