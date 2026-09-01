import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcularMedia } from './calcular-media/calcular-media';
import { ApoliceSeguro } from './apolice-seguro/apolice-seguro';
import { ConversorTemperatura } from './conversor-temperatura/conversor-temperatura';
import { CalculadoraImc } from './calculadora-imc/calculadora-imc';

const routes: Routes = [
  {path: `media`, component: CalcularMedia},
  {path: `seguro`, component: ApoliceSeguro},
  {path: `conversor`, component: ConversorTemperatura},
  {path: `imc`, component: CalculadoraImc}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
