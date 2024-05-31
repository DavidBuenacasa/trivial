import { Component } from '@angular/core';
import { Categoria } from '../categoria.model';
import { Pregunta } from '../pregunta.model';
import { NavigationExtras, Router} from '@angular/router';
import { DataServices } from '../data.service';

@Component({
  selector: 'app-categoria-component',
  templateUrl: './categoria-component.component.html',
  styleUrl: './categoria-component.component.css'
})
export class CategoriaComponentComponent {

  private categorias:Categoria[];
  private modoEdicion:boolean=false;

  constructor(private router:Router, private dataService:DataServices){

    this.categorias=[];

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.rellenarDatos();
    
  }

  getCategorias(){
    return this.categorias
  }

  getModoEdicion(){
    return this.modoEdicion;
  }

  changeModoEdicion(){
    this.modoEdicion=!this.modoEdicion;
  }

  categoriaClicked(i:Categoria){

    console.log()


    let categoria: NavigationExtras = {
      queryParams: {
          "nombre": i.nombre,
          "preguntas":JSON.stringify(i.preguntas),
          "ranking":JSON.stringify(i.ranking)
      }
  };

    if(this.getModoEdicion()){
      this.router.navigate(["/modificarCat"],categoria);
    }else{
      this.router.navigate(["/juego"],categoria);
    }

  }

  rellenarDatos(){

    return this.dataService.cargarCategorias().subscribe(misCategorias=>{
      this.categorias=Object.values(misCategorias)
      

  })
  }



}
