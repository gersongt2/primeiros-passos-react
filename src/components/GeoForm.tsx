import {  Circle, Square } from "./Geo"

export const GeoForm= ()=>{
    return(
        <div>
            <h1>Forma geometrica</h1>

            <div className="flex gap-2 border-black border-2 p-1  ">
             <Square/>   
             <Circle/>
            </div>
            

        </div>
    )
}