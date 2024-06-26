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


const appRoutes:Routes=[
  {path:"",component:InicioComponentComponent},
  {path:"login",component:LoginComponentComponent},
  {path:"categoria",component:CategoriaComponentComponent},
  {path:"modificarCat",component:ModificarCatComponentComponent},
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatRadioModule,
  ],
  providers: [
    LoginService,
    DataServices,
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
