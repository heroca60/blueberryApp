import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MarcaComponent } from './marca/marca.component';
import { MaterialModule } from './material-module';
import { CreateMarcaComponent } from './marca/create-marca/create-marca.component';
import { ReadMarcaComponent } from './marca/read-marca/read-marca.component';
import { ListMarcaComponent } from './marca/list-marca/list-marca.component';
//Cargando rutas
const routes:Routes=[
  //Ruta de inicio
  {path:'',component:HomeComponent},
  //Ruta para marcas
  {path:'marca',component:MarcaComponent},
  //Ruta no definida y redireccionando
  {path:'**',component:HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MarcaComponent,
    CreateMarcaComponent,
    ReadMarcaComponent,
    ListMarcaComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule, 
    BrowserAnimationsModule,   
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
