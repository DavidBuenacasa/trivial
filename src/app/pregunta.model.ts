type Dictionary = {
    [key: string]: boolean;
};

export class Pregunta{

     pregunta:string;
     opciones:Dictionary={}

    constructor(pregunta:string,opciones:Dictionary) {

        this.pregunta=pregunta;
        this.opciones=opciones;

    }

    isCorrect(key:string){
        
        return true
    }
}