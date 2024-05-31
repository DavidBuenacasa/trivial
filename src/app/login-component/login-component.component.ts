import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {

  constructor(private loginService:LoginService){

  }

  login(form:NgForm){
    const email:string =form.value.email;
    const password:string =form.value.password;

    this.loginService.login(email,password);
  }
}
