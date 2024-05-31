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

  opcion1:string;
  opcion2:string;
  opcion3:string;
  opcion4:string;

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

    this.opcion1="";
    this.opcion2="";
    this.opcion3="";
    this.opcion4="";

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

      this.opcion1=this.opcionesArray[0]
      this.opcion2=this.opcionesArray[1]
      this.opcion3=this.opcionesArray[2]
      this.opcion4=this.opcionesArray[3]

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

  preguntaClicked(event:Event){

    let respuesta;
    let correcto:boolean;

    respuesta = (<HTMLButtonElement>event.target).value

    correcto = true

    console.log(this.preguntaSelected)

    console.log(correcto)

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

  sumarPuntuacion(time:number){

    this.puntuacion=this.puntuacion + time*2 +10;

  }

  restarContador(){
    if(this.displayTimer>0){
      this.displayTimer--
    }
    
  }

  timer(sec:number) {
    // let minute = 1;
    let seconds: number = sec;
    let textSec: any = "0";
    let statSec: number = 30;

    const prefix = sec < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;


      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.displayTimer = seconds

      if (seconds == 0) {
        console.log("finished");
        clearInterval(timer);
      }
    }, 1000);
  }
}
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

