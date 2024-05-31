import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { response } from "express";
import { error } from "console";
import { LoginService } from "./login-component/login.service";
import { Categoria } from "./categoria.model";

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient,private loginService:LoginService){

    }

    cargarCategorias(){
        return this.httpClient.get("https://trivial-1653f-default-rtdb.europe-west1.firebasedatabase.app/categorias.json");
    }

    guardarCategoria(categorias:Categoria[]){
        const token=this.loginService.getIdToken();
        this.httpClient.put("https://trivial-1653f-default-rtdb.europe-west1.firebasedatabase.app/categoria.json",categorias).subscribe(
            response=>console.log("Se han guardado los empleados " +  response),
            error=> console.log("Error" + error),
        );
    }


}
