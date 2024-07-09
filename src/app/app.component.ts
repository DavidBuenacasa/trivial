import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login-component/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trivial';
  volumeSound:number = 40;

  stateButtonLink:string="flex";
  stateButtonDropdown:string="none";

   mensajeToast:string=""
   tituloToast:string=""

  constructor(private loginService:LoginService){}
  ngOnInit(): void {

    
    //Inicializa la base de datos
    firebase.initializeApp({
      apiKey: "AIzaSyD-KqHfZRk7DxphuV519-jkESF4jiPVWvQ",
      authDomain: "trivial-1653f.firebaseapp.com",
    })
    this.isLogin()
  }

  //Hace el Logout

  logout(){
    this.loginService.logout();
    this.notLogin();
  }

  //Si no esta loggeado aparece el buttonLink

  notLogin(){
    this.stateButtonDropdown="none"
    this.stateButtonLink="flex"
  }

  //SI esta loggeado aparece el buttonDropdown

  login(){
    this.stateButtonDropdown="flex"
    this.stateButtonLink="none"
  }

  //Al cargar se ejecuta para determinar la apariencia del boton

  isLogin(){
    if(this.loginService.islogged()){
      this.login();
    }else{
      this.notLogin();
    }
  }
}
