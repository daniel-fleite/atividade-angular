import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalcularMedia } from './calcular-media/calcular-media';
import { FormsModule } from '@angular/forms';
import { ApoliceSeguro } from './apolice-seguro/apolice-seguro';
import { ConversorTemperatura } from './conversor-temperatura/conversor-temperatura';
import { CalculadoraImc } from './calculadora-imc/calculadora-imc';
import { Home } from './home/home';

@NgModule({
  declarations: [App, CalcularMedia, ApoliceSeguro, ConversorTemperatura, CalculadoraImc, Home],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
