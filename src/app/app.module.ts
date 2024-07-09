import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponentComponent } from './inicio-component/inicio-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { CategoriaComponentComponent } from './categoria-component/categoria-component.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login-component/login.service';
import { HttpClientModule } from '@angular/common/http';
import { ModificarCatComponentComponent } from './modificar-cat-component/modificar-cat-component.component';
import { JuegoComponentComponent } from './juego-component/juego-component.component';
import { DataServices } from './data.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { LoginGuardian } from './login-component/login-guardian';
import { CookieService } from 'ngx-cookie-service';
import { PreguntaRowComponentComponent } from './pregunta-row-component/pregunta-row-component.component';
import { ToastService } from './toast.service';



const appRoutes:Routes=[
  {path:"",component:InicioComponentComponent},
  {path:"login",component:LoginComponentComponent},
  {path:"categoria",component:CategoriaComponentComponent},
  {path:"modificarCat",component:ModificarCatComponentComponent, canActivate:[LoginGuardian]},
  {path:"juego",component:JuegoComponentComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    InicioComponentComponent,
    LoginComponentComponent,
    CategoriaComponentComponent,
    ModificarCatComponentComponent,
    JuegoComponentComponent,
    PreguntaRowComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatRadioModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [
    LoginService,
    DataServices,
    provideAnimationsAsync(),
    LoginGuardian,
    CookieService,
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
