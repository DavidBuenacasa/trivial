

import { Pregunta } from "./pregunta.model";
import { Ranking } from "./ranking.model";
  
export class Categoria{

    preguntas:Pregunta[];

    nombre:string;

    ranking:Ranking[];
    

    constructor(nombre:string,preguntas:Pregunta[]) {
        this.nombre=nombre;
        this.preguntas=preguntas;
        this.ranking=[]

    }


    cargarPreguntas(){

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