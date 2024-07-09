import { HttpClient } from "@angular/common/http";
import { Injectable, untracked } from "@angular/core";
import { response } from "express";
import { error } from "console";
import { LoginService } from "./login-component/login.service";
import { Categoria } from "./categoria.model";
import { ToastService } from "./toast.service";

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient,private loginService:LoginService, private toast:ToastService){

    }

    cargarCategorias(){
        return this.httpClient.get("https://trivial-1653f-default-rtdb.europe-west1.firebasedatabase.app/categorias.json");
    }

    guardarCategoria(categorias:Categoria[]){
        const token=this.loginService.getIdToken();
        this.httpClient.put("https://trivial-1653f-default-rtdb.europe-west1.firebasedatabase.app/categoria.json",categorias).subscribe(
            response=>this.toast.showToastSaveData(),
            error=> this.toast.showToastSaveDataError(),
        );
    }

    actualizarCategoria(index:number, categoria:Categoria){

        const token=this.loginService.getIdToken();

        let url='https://trivial-1653f-default-rtdb.europe-west1.firebasedatabase.app/categorias/'+index+'.json?auth=' + token ;

        this.httpClient.put(url,categoria).subscribe(
            response=>this.toast.showToastSaveData(),
            error=> this.toast.showToastSaveDataError(),
        );

    }
}
