import { Component } from '@angular/core';
import { Pregunta } from '../pregunta.model';
import { ActivatedRoute } from '@angular/router';
import { Ranking } from '../ranking.model';
import { switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-juego-component',
  templateUrl: './juego-component.component.html',
  styleUrl: './juego-component.component.css'
})
export class JuegoComponentComponent {

  //Pregunta y OPciones

  title:string;
  pregunta:string;

  //Pregunta click

  preguntaSelected:Pregunta;
  preguntas:Pregunta[];

  //Opiones pregunta en
  opcionesArray:string[];


  puntuacion:number;
  rankings:Ranking[];

  displayRanking:String;
  displayGame:string;

  displayTimer: number;
  subscription: any;


  constructor(private route: ActivatedRoute){
    this.title="Pregunta 1"
    this.pregunta="Prueba de pregunta"

    this.preguntaSelected=new Pregunta("",{})

    this.puntuacion=0;
    this.rankings=[]

    this.preguntas=[];
    this.opcionesArray=[]

    this.displayRanking="none";
    this.displayGame="flex";
    this.displayTimer=30;

    this.route.queryParams.subscribe(params => {
      console.log(params)
      this.preguntas = JSON.parse(params["preguntas"]);
      this.rankings = JSON.parse(params["ranking"]);
  });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.inicioJuego();
    
  }

    newPregunta(){

    let index;
    let preguntaSelected;
    let num_items;
    let opcionesSelected;
    
    
    num_items = this.preguntas.length;
    this.opcionesArray=[]
    
    //SI es distinto de 0 aun quedan preguntas por salir
    if(num_items != 0){

      this.displayTimer=30;

      this.subscription = timer(0, 1000).pipe(
        switchMap(async () => this.restarContador())
      ).subscribe(result => 
        console.log(this.displayTimer)
      );
      

      index = Math.random()*num_items;

      index= Math.trunc(index)
  
      this.preguntaSelected = this.preguntas[index];
  
      this.title="Pregunta " + 1
  
      this.pregunta=this.preguntaSelected.pregunta;
  
      //OPCIONES

      opcionesSelected = this.preguntaSelected.opciones

      for (let key in opcionesSelected) {
        this.opcionesArray.push(key)
      }

      this.preguntas.splice(index,1)
      
    }else{ //SI no quedan preguntas se acaba el juego
      this.finJuego();
    }
  }

  inicioJuego(){
    this.puntuacion=0;

    this.newPregunta();
  }

  finJuego(){
    
    this.displayGame="none";
    this.displayRanking="flex";

  }

  setRanking(){
    
  }

  preguntaClicked(event:Event){

    let respuesta;
    let correcto:boolean;
    let opcionesSelected; 

    respuesta = (<HTMLButtonElement>event.target).value

    opcionesSelected=this.preguntaSelected.opciones

    correcto=opcionesSelected[respuesta]

    if(correcto){
      this.preguntaAcertada()
    }else{
      this.preguntaFallada();
    }

  }

  async preguntaAcertada(){
    this.sumarPuntuacion(this.displayTimer);
    await delay(1000)
    this.newPregunta()
  }

  preguntaFallada(){

  }

  finDeTiempo(){

  }

  sumarPuntuacion(time:number){

    this.puntuacion=this.puntuacion + time*2 +10;

  }

  restarContador(){
    if(this.displayTimer>0){
      this.displayTimer--
    }
    
  }

 
}
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

