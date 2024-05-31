import { Component } from '@angular/core';
import { Categoria } from '../categoria.model';
import { Pregunta } from '../pregunta.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataServices } from '../data.service';

type Dictionary = {
  [key: string]: boolean;
};

@Component({
  selector: 'app-modificar-cat-component',
  templateUrl: './modificar-cat-component.component.html',
  styleUrl: './modificar-cat-component.component.css'
})
export class ModificarCatComponentComponent {

   public nombre:string;

   pregunta:string;
   opciones:Dictionary;
   opcion1:string;
   opcion2:string;
   opcion3:string;
   opcion4:string;

   cambios:Boolean=false;

  public preguntas:Pregunta[];


  constructor(private router:Router,private route: ActivatedRoute){
    this.pregunta="";
    this.opciones={};
    this.opcion1="";
    this.opcion2="";
    this.opcion3="";
    this.opcion4="";


    this.preguntas=[];

    this.nombre="";

    this.route.queryParams.subscribe(params => {
      this.nombre = params["nombre"];
      this.preguntas = JSON.parse(params["preguntas"]);
  });


  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }


  getNombre(){
    return this.nombre
  }

  getOpcion1(){
    return this.opcion1;
  }

  getOpcion2(){
    return this.opcion2;
  }

  getOpcion3(){
    return this.opcion3;
  }

  getOpcion4(){
    return this.opcion4;
  }
  

  rellenarOpciones(i:number){

    //Cuando se despliegue una pregunta se rellenara los valores

    let preguntaSelected:Pregunta=<Pregunta>this.preguntas.at(i)

    this.pregunta=preguntaSelected.pregunta;

    this.opciones= preguntaSelected.opciones;

    //Rellenar opciones

    
  }

  guardarPregunta(){




  }

  addPregunta(){
    let opciones: Dictionary = {};

    opciones[this.opcion1] = false;
    opciones[this.opcion2] = false;
    opciones[this.opcion3] = false;
    opciones[this.opcion4] = false;

    let pregunta:Pregunta=new Pregunta(this.pregunta,opciones)

    this.preguntas.push(pregunta);
  }

  guardarButton(){
    this.router.navigate(["/categoria"])
  }

  cancelarButton(){

    this.router.navigate(["/categoria"])
  }
}
