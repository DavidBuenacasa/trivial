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

  //Al hacer click sobre la categoria se recogen los datos 
  //y se carga el menu correspondiente

  categoriaClicked(categoria:Categoria,i:number){

    let categoriaSelected: NavigationExtras = {
      queryParams: {
          "index":i,
          "nombre": categoria.nombre,
          "preguntas":JSON.stringify(categoria.preguntas),
          "ranking":JSON.stringify(categoria.ranking)
      }
    };

    //Si el modo edicion estaba activado se carga modificar categoria.
    //Si no, inicia el juego

    if(this.getModoEdicion()){
      this.router.navigate(["/modificarCat"],categoriaSelected);
    }else{
      this.router.navigate(["/juego"],categoriaSelected);
    }

  }

  //Al iniciar el menu se llama al servicio dataService para consultar las categorias.
  rellenarDatos(){
    return this.dataService.cargarCategorias().subscribe(misCategorias=>{
      this.categorias=Object.values(misCategorias)
  })
  }
}
