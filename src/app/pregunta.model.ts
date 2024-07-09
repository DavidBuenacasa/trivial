type Dictionary = {
    [key: string]: boolean;
};

export class Pregunta {

    pregunta: string;
    opciones: Dictionary = {}

    constructor(pregunta: string, opciones: Dictionary) {

        this.pregunta = pregunta;
        this.opciones = opciones;

    }

    isCorrect(key:string){
        console.log(this.opciones[key])
        return this.opciones[key]
    }


}