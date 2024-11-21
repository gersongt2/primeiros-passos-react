type Propts ={
    name?: string;
    roles: string[];
}


export const Card=({name,roles}: Propts)=>{

    
    return(
        <div className="  h-96 mt-2 border-2 border-slate-800 ">
            <h1 className="text-black size-2 mt-4">{name?name:""}</h1>
            {roles &&
            <h2 className="text-black size-2 mt-4">{roles[1]}</h2>
            }
        </div>
    )
}