import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number | null = null;

  somar(): void {
    this.resultado = this.numero1 + this.numero2;
  }

  subtrair(): void {
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar(): void {
    this.resultado = this.numero1 * this.numero2;
  }

  dividir(): void {
    if (this.numero2 !== 0) {
      this.resultado = this.numero1 / this.numero2;
    } else {
      this.resultado = null;
      alert("Não é possível dividir por zero.");
    }
  }

  potencia(): void {
    this.resultado = Math.pow(this.numero1, this.numero2);
  }

  media(): void {
    this.resultado = (this.numero1 + this.numero2) / 2;
  }

  ativarBotao(event: any) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => button.classList.remove('active'));

    event.target.classList.add('active');
  }
}
