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

  categoriaClicked(categoria:Categoria,i:number){

    console.log()


    let categoriaSelected: NavigationExtras = {
      queryParams: {
          "index":i,
          "nombre": categoria.nombre,
          "preguntas":JSON.stringify(categoria.preguntas),
          "ranking":JSON.stringify(categoria.ranking)
      }
  };

    if(this.getModoEdicion()){
      this.router.navigate(["/modificarCat"],categoriaSelected);
    }else{
      this.router.navigate(["/juego"],categoriaSelected);
    }

  }

  rellenarDatos(){

    return this.dataService.cargarCategorias().subscribe(misCategorias=>{
      this.categorias=Object.values(misCategorias)
      

  })
  }



}
