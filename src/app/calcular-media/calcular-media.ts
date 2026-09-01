import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  standalone: false,
  styleUrl: './calcular-media.css',
  templateUrl: './calcular-media.html',
})
export class CalcularMedia {
  ac1:number = 0
  ac2:number = 0
  ag:number = 0
  af:number = 0

  resultado: number = 0
  aprov: string = ``

  clica() {
    this.resultado = (this.ac1 * 0.15) + (this.ac2 * 0.3) + (this.ag * 0.1) + (this.af * 0.45) 

    if(this.resultado >= 5) {
      this.aprov = `Aprovado!`
    } else {
      this.aprov = `Reprovado!`
    }
  }

}
