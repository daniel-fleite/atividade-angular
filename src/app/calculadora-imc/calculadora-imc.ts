import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-imc',
  standalone: false,
  styleUrl: './calculadora-imc.css',
  templateUrl: './calculadora-imc.html',
})
export class CalculadoraImc {
  peso: number = 0
  altura: number = 0

  resultado: number = 0
  imc: string = ``

  clica() {
    this.resultado = this.peso / (this.altura ** 2)

    if(this.resultado < 18.5) {
      this.imc = `Abaixo do peso`
    } else if(18.5 <= this.resultado && this.resultado <= 24.9) {
      this.imc = `Peso normal`
    } else if(25 <= this.resultado && this.resultado <= 29.9) {
      this.imc = `Peso normal`
    } else if(30 <= this.resultado && this.resultado <= 34.9) {
      this.imc = `Obesidade grau I` 
    } else if (35 <= this.resultado && this.resultado <= 39.9) {
      this.imc = `Obesidade grau II`
    } else {
      this.imc = `Obesidade grau III`
    }
  }
}
