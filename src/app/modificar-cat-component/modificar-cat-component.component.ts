import { Component } from '@angular/core';
import { Categoria } from '../categoria.model';
import { Pregunta } from '../pregunta.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataServices } from '../data.service';
import { Ranking } from '../ranking.model';

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
  private rankings:Ranking[];

  private index:number=-1;

  private categoria:Categoria;

    //Opiones pregunta en
    opcionesArray:string[];


  constructor(private router:Router,private route: ActivatedRoute, private dataService:DataServices){
    this.pregunta="";
    this.opciones={};
    this.opcion1="";
    this.opcion2="";
    this.opcion3="";
    this.opcion4="";

    this.opcionesArray=[]

    this.preguntas=[];
    this.rankings=[]
    this.nombre="";

    this.categoria=new Categoria(this.nombre,this.preguntas);



    this.route.queryParams.subscribe(params => {
      this.nombre = params["nombre"];
      this.index = params["index"]
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

    for (let key in this.opciones) {
      this.opcionesArray.push(key)
    }

    this.opcion1=this.opcionesArray[0]
    this.opcion2=this.opcionesArray[1]
    this.opcion3=this.opcionesArray[2]
    this.opcion4=this.opcionesArray[3]

    
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

    this.categoria.nombre = "Prueba";
    this.categoria.preguntas=this.preguntas;
    //this.categoria.ranking=this.rankings;

    this.dataService.actualizarCategoria(this.index,this.categoria)

    this.router.navigate(["/categoria"])
  }

  cancelarButton(){

    this.router.navigate(["/categoria"])
  }

  eliminarPregunta(index:number){
    this.preguntas.splice(index,1)
  }
}


