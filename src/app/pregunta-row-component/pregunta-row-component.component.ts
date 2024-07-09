import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { Pregunta } from '../pregunta.model';
import {MatRadioModule} from '@angular/material/radio';
import {MatRadioGroupHarness} from '@angular/material/radio/testing';
import { ComponentHarness } from '@angular/cdk/testing';
import { FormsModule, NG_VALUE_ACCESSOR, NgForm } from '@angular/forms';

type Dictionary = {
  [key: string]: boolean;
};

@Component({
  selector: 'app-pregunta-row-component',
  templateUrl: './pregunta-row-component.component.html',
  styleUrl: './pregunta-row-component.component.css',
})

export class PreguntaRowComponentComponent{

  @Input()
  preguntaObject!: Pregunta;

  @Input()
  i!: number;

  @Output() borrar = new EventEmitter<number>();

  //preguntaObject:Pregunta;

  preguntaText:string="";


  opciones:Dictionary={};
  opcionesArray:string[]=[];

  correctanswer:string="d"


  rellenarOpciones(i:number){

    //Vaciamos el array auxiliar 
    this.opcionesArray.splice(0,this.opcionesArray.length)

    //Cuando se despliegue una pregunta se rellenara los valores

    this.preguntaText=this.preguntaObject.pregunta;

    this.opciones= this.preguntaObject.opciones;

    //Si la pregunta es nueva
    if(this.preguntaText==""){

      this.opcionesArray.push("")
      this.opcionesArray.push("")
      this.opcionesArray.push("")
      this.opcionesArray.push("")

    }else{ //SI la pregunta esta en la base de datos
      let indexBoolean=0;

    let index = 0;
    let b:string;

    //Rellenar opciones

    //Utilizamos un array auxiliar para poder acceder a las opciones
    for (let key in this.opciones) {

      this.opcionesArray.push(key)

      b= String(this.opciones[key])

      if(b == "true"){
        indexBoolean=index;
      }
  
      index=index+1
    }

    this.correctanswer=this.opcionesArray[indexBoolean]
    }
  }

  //Enviamos una señal al componente padre para eliminar la pregunta del array

  eliminarPregunta(){
    this.borrar.emit(this.i)
  }

  guardarPregunta(){
    
  }

}

