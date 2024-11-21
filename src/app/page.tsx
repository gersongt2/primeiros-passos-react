import { Circle, Square } from "@/components/Geo";
import { GeoForm } from "@/components/GeoForm";
import { Card} from "@/components/Card";
import { pessoas } from "@/data/peopleList";
 



const Page = () =>{

  const filtro = pessoas.filter(person => person.profissao === "Gerente")

  return(

   

    <div>
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
      </div>}
    </div>
  
  );
  
}

export default Page;