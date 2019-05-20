import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { PuntajesComponent } from "./componentes/puntajes/puntajes.component";
import { HomeComponent } from './componentes/home/home.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'puntajes', component: PuntajesComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
