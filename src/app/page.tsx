import { Circle, Square } from "@/components/Geo";
import { GeoForm } from "@/components/GeoForm";
import { Card} from "@/components/Card";
import { pessoas } from "@/data/peopleList";
import { Rating } from "@/components/EmojiRating";
import { Working } from "@/components/workingCard";
 



const Page = () =>{

  const filtro = pessoas.filter(person => person.profissao === "Gerente")


  
//variveis e condiçoes do primeiro exercicio

  const h =  new Date().getHours();



  return(

    <div>
      {/* 
      <h1 >Ola mundo</h1>
      <h3>Prazer em velo senhor Enderson</h3>
      
      <GeoForm/>
      
      <Card
      name="Gerson"
      roles={["Analista de Sistemas", " SoftwareS Enginner"]}
      />

      <Card

      roles={[]}
      />
    
      <ul>
        {pessoas.map(person=><li key={person.id}> {person.nome} - { person.profissao} </li>)}
      </ul>

      {filtro &&
        <div>
          {filtro.map(person=><h1 key={person.id}> {person.nome} - { person.profissao} </h1>)}
        </div>
      }
      */}






      {/* Exercicio 1 */}



          <div className=" grid grid-cols-1  bg-gradient-to-r from-blue-500 to-blue-950 w-screen h-screen ">

              <div className=" flex items-end justify-center text-4xl text-white font-bold ">
                {new Date().getHours()} : {new Date().getMinutes()}
              </div>

              <div>
                <h1 className=" text-4xl text-white text-center font-bold">
                {h >= 0 && h <12 && "Bom Dia"}
                {h >= 12 && h <18 && "Boa tarde" }
                {h >= 18 && h <=23 && "Boa Noite"}
                </h1>
              </div>  
      
          </div>
            
      




      {/* Exercicio 2 Nta dos alunos*/}

        <Rating nota={Math.floor(Math.random()*5) + 1}/>
          
        
      {/* Exercicio 3 Lista de funcionarios e produtividades  */}

      <Working/>

    </div>
  
  );
  
}

export default Page;