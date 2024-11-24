type props={
    nota:number
}

export const Rating=({nota}:props)=>{

    
    const emojiarray=["🥀","👺","🙁","🙂","🦈","🐬"]
    const getemoji=emojiarray[nota]

    return(
        <div className=" flex justify-center items-center bg-gradient-to-tl from-slate-400 to-slate-950 w-screen h-screen">
            
            <div >
                <h3 className=" text-center text-white text-3xl">NOTA:{nota}</h3>

                <div className=" flex justify-center text-4xl ">{getemoji} </div>
            </div>

        </div>
    )
}