import { funcionarios } from "@/data/workingList"

export const Working = ()=>{

    let saldo : number = 0
    return(

        <div className=" mt-7 h-screen w-screen">

                {funcionarios.map(work=>
                    
                    <div className=" flex justify-center w-[100%] h-28   ">

                        <div className="flex items-center m-0 w-80 h-28 bg-slate-300 border-b-[1px] rounded-l-3xl border-black">
                            <div className=" w-10 h-10 rounded-full bg-red-600 mr-2 ml-2"></div>
                            <div className=" flex-col">
                                    <div>{work.nome}</div>
                                    <div>{work.email}  </div>
                            </div>
                        </div>

                        <div className=" flex-col text-center m-0 w-52 h-28 bg-slate-300 border-b-[1px] border-black">
                            <h1 className="mt-10">Projetos Primeiro Semestre</h1>
                            {work.projetos.primeiro_semestre.length}
                        </div>

                        
                        <div className="flex-col text-center   w-52 h-28 bg-slate-300 border-b-[1px] border-black">
                            <h1 className="mt-10">Projetos Segundo Semestre</h1>
                            {work.projetos.segundo_semestre.length}
                        </div>

                        <div className="flex-col text-center w-52 h-28 ml bg-slate-300 border-b-[1px] border-black">
                            <h1 className="mt-10">Sálario</h1>
                            <div>
                            R$: { saldo = work.projetos.primeiro_semestre.length*500 + work.projetos.segundo_semestre.length*250}
                            </div>
                        </div>


                        <div className="flex-col text-center w-52 h-28 ml bg-slate-300 border-b-[1px] rounded-r-3xl border-black">
                            <h1 className="mt-10">Prudutividade</h1>
                            
                            {saldo >=1500 &&
                            <button className="w-16 h-10 rounded-3xl bg-green-500" > Alta</button>
                            }

                            {saldo <=1250 && saldo>1000 &&
                            <button className="w-16 h-10 rounded-3xl bg-blue-400"> media</button>
                            }

                            {saldo<=1000 &&
                            <button className="w-16 h-10 rounded-3xl bg-red-600"> baixa</button>
                            }
                        </div>
                        

                    </div>)
                }
            
        </div>
    )

}