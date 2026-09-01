import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-temperatura',
  standalone: false,
  styleUrl: './conversor-temperatura.css',
  templateUrl: './conversor-temperatura.html',
})
export class ConversorTemperatura {

  celsius: number = 0

  resultadoF: number = 0
  resultadoK: number = 0

  clica() {
    this.resultadoF = (this.celsius * 9/5) + 32

    this.resultadoK = this.celsius + 273.15
  }
}
