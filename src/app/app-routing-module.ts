import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcularMedia } from './calcular-media/calcular-media';
import { ApoliceSeguro } from './apolice-seguro/apolice-seguro';
import { ConversorTemperatura } from './conversor-temperatura/conversor-temperatura';
import { CalculadoraImc } from './calculadora-imc/calculadora-imc';
import { Home } from './home/home';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: `home`, component: Home},
  {path: `media`, component: CalcularMedia},
  {path: `seguro`, component: ApoliceSeguro},
  {path: `conversor`, component: ConversorTemperatura},
  {path: `imc`, component: CalculadoraImc},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
