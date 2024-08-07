

import { Pregunta } from "./pregunta.model";
import { Ranking } from "./ranking.model";
  
export class Categoria{

    preguntas:Pregunta[];

    nombre:string;

    ranking:Ranking[];
    

    public constructor(nombre:string,preguntas:Pregunta[]) {
        this.nombre=nombre;
        this.preguntas=preguntas;
        this.ranking=[]

    }


    setNombre(name:string){
      this.nombre=name
    }

    setPreguntas(preguntas:Pregunta[]){
      this.preguntas=preguntas
    }




    private toObject() {
        return {
          nombre: this.nombre,
          preguntas: this.preguntas,
        }
      }

    serialize() {
        return JSON.stringify(this.toObject());
      }
}