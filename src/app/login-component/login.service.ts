import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { CookieService } from "ngx-cookie-service";
import { ToastService } from "../toast.service";

@Injectable()
export class LoginService{

    
    constructor(private router:Router, private cookies:CookieService, private toast:ToastService){
        
    }

    token:string="";

    //Al hacer login se contacta con la base de datos para verificar el usuario y contraseña
    //Se crea un token de acceso y este se almacena en una cookie

    login(email:string, password:string){
        firebase.auth().signInWithEmailAndPassword(email,password).then(
            response=>{
                firebase.auth().currentUser?.getIdToken().then(
                    token=>{
                        this.token=token;
                        this.cookies.set("token",this.token)
                        this.toast.showToastLoginCorrect()
                        this.router.navigate(['/'])
                        

                    }
                )
            },
            error=> this.toast.showToastErrorLogin(),
        );
    }

    getIdToken(){
        return this.cookies.get("token");
    }


    //SI el token es esta vacio devuelve false, si no devuelve true.

    islogged(){

        let logged = false;

        if(this.cookies.get("token") != ""){
            logged=true;
        }
        return logged;
    }

    //Al hacer loggout se elimina el token de la cookie para eliminar el inicio de sesion

    logout(){
        firebase.auth().signOut().then(()=>{
            this.cookies.set("token","")
            this.toast.showToastLogout()
            this.router.navigate(['/'])
        })
    }

}