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

  opciones:Dictionary={};

  cambios:Boolean=false;

  public preguntas:Pregunta[];
  private rankings:Ranking[];

  private index:number=-1;

  private categoria:Categoria;


  constructor(private router:Router,private route: ActivatedRoute, private dataService:DataServices){

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

  //Al guardar se recogen todos los datos y se envian al dataService para guardar los datos

  guardarButton(){

    this.categoria.setNombre(this.nombre)
    this.categoria.setPreguntas(this.preguntas)

    console.log(this.categoria)

    this.dataService.actualizarCategoria(this.index,this.categoria)

    this.router.navigate(["/categoria"])
  }

  //Se vuelve al menu anterior

  cancelarButton(){

    this.router.navigate(["/categoria"])
  }

  //Se añade una nueva pregunta vacia al array

  addPregunta(){

    let opciones: Dictionary = {};

    let pregunta:Pregunta=new Pregunta("",opciones)
    this.preguntas.push(pregunta);
  }


  //Se elimina la pregunta del Array preguntas

  eliminarPregunta(i:number){
    this.preguntas.splice(i,1)
  }
}


