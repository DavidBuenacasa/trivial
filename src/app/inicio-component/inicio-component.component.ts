import { Component } from '@angular/core';
import { LoginService } from '../login-component/login.service';
import $ from 'jquery';


@Component({
  selector: 'app-inicio-component',
  templateUrl: './inicio-component.component.html',
  styleUrl: './inicio-component.component.css'
})
export class InicioComponentComponent {

  volumeSound:number =40;
  escrito:string=""

  mensajeToast:String="Prueba mensaje";

  constructor(private loginService:LoginService){


  }

  // Devuelve un booleano en funcion si el usuario esta logeado
  usuarioLogged(){
    return this.loginService.islogged();
  }

}

