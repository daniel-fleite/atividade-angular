import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-seguro',
  standalone: false,
  styleUrl: './apolice-seguro.css',
  templateUrl: './apolice-seguro.html',
})
export class ApoliceSeguro {
  nome: string = ""
  sexo: string = ""
  idade: number = 0
  valorAutomovel: number = 0

  resultado: number = 0

  clica() {
    if(this.sexo === `masc` && this.idade <= 25) {
      this.resultado = this.valorAutomovel * 0.15
    } else if(this.sexo === `masc` && this.idade > 25) {
      this.resultado = this.valorAutomovel * 0.1
    } else {
      this.resultado = this.valorAutomovel * 0.08
    }
  }
}
